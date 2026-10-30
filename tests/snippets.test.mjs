// Guards the shape of the snippet files. A broken snippet reaches users as
// invalid inserted code, so it is checked here rather than by hand.
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { test } from "node:test";
import vm from "node:vm";
import { loadSnippets } from "./helpers.mjs";

const snippets = loadSnippets();
const root = path.resolve(import.meta.dirname, "..");

/** `contributes.snippets` from package.json. */
const contributes = JSON.parse(
  readFileSync(path.join(root, "package.json"), "utf8")
).contributes.snippets;

const DESCRIPTION_PATTERN =
  /^.+。更多信息查看 (?:<https:\/\/[^>]+>(?: 和 )?)+。$/u;
const CHOICE_TABSTOP_PATTERN = /\$\{\d+\|(?<choice>[^{}]*)\|\}/gu;
const DEFAULT_TABSTOP_PATTERN = /\$\{\d+:(?<default>\{[^{}]*\}|[^{}]*)\}/gu;
const FINAL_TABSTOP_PATTERN = /\$0/gu;
const BARE_TABSTOP_PATTERN = /\$\d+/gu;
const FILLED_OBJECT_PATTERN = /\{\s*null\s*\}/gu;

/**
 * Replaces tabstops with text that keeps the surrounding code parseable: a
 * choice takes its first option, a named default keeps the default, and a bare
 * `$n` becomes `null` because it can sit in a value position.
 *
 * @param {string} code
 */
function fillTabstops(code) {
  return (
    code
      .replace(CHOICE_TABSTOP_PATTERN, (_match, choice) => choice.split(",")[0])
      .replace(DEFAULT_TABSTOP_PATTERN, (_match, defaultValue) => defaultValue)
      .replace(FINAL_TABSTOP_PATTERN, "")
      .replace(BARE_TABSTOP_PATTERN, "null")
      // A tabstop alone inside an object literal is there for the user to fill
      // in, and `{null}` is not valid JavaScript.
      .replace(FILLED_OBJECT_PATTERN, "{}")
  );
}

/** @param {string} code */
function parses(code) {
  // Snippet bodies are fragments: statements, expressions, or object members
  // such as page lifecycle methods.
  return [code, `(${code})`, `({${code}})`].some((source) => {
    try {
      const compiled = new vm.Script(source);
      return Boolean(compiled);
    } catch {
      return false;
    }
  });
}

test("every snippet file is served to its languages", () => {
  const files = readdirSync(path.join(root, "snippets")).filter((name) =>
    name.endsWith(".json")
  );
  const served = new Set(
    contributes.map(({ path: snippetPath }) => path.basename(snippetPath))
  );
  assert.deepEqual(
    [...served].sort(),
    files.sort(),
    "snippets/ and contributes.snippets disagree"
  );
  for (const { path: snippetPath } of contributes) {
    assert.ok(
      snippetPath.startsWith("./snippets/"),
      `${snippetPath} is outside snippets/`
    );
  }
});

test("every snippet has a prefix, a body and a doc-linked description", () => {
  for (const { name, entries } of snippets) {
    for (const [key, snippet] of Object.entries(entries)) {
      const where = `${name}: ${key}`;
      assert.ok(
        Array.isArray(snippet.prefix),
        `${where} - prefix is not an array`
      );
      assert.ok(snippet.prefix.length > 0, `${where} - prefix is empty`);
      for (const prefix of snippet.prefix) {
        assert.ok(prefix.length > 0, `${where} - prefix entry is empty`);
      }
      assert.ok(Array.isArray(snippet.body), `${where} - body is not an array`);
      assert.ok(snippet.body.length > 0, `${where} - body is empty`);
      for (const line of snippet.body) {
        assert.equal(
          typeof line,
          "string",
          `${where} - body line is not a string`
        );
      }
      assert.match(
        snippet.description,
        DESCRIPTION_PATTERN,
        `${where} - description does not end with a doc link`
      );
    }
  }
});

test("JavaScript bodies leave the cursor at a final tabstop", () => {
  const javascript = snippets.find(({ name }) => name === "javascript");
  for (const [key, snippet] of Object.entries(javascript.entries)) {
    const lastLine = snippet.body.at(-1);
    assert.ok(
      lastLine.includes("$0"),
      `javascript: ${key} - last line has no $0: ${JSON.stringify(lastLine)}`
    );
  }
});

test("JavaScript bodies are parseable", () => {
  const javascript = snippets.find(({ name }) => name === "javascript");
  for (const [key, snippet] of Object.entries(javascript.entries)) {
    const code = fillTabstops(snippet.body.join("\n"));
    // `import.meta` is only valid in a module, which a script context cannot
    // parse. Those bodies are single expressions covered by the shape test.
    if (code.includes("import.meta")) {
      continue;
    }
    assert.ok(parses(code), `javascript: ${key} - ${JSON.stringify(code)}`);
  }
});
