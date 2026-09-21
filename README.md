<a href="https://github.com/uni-helper/uni-cloud-snippets-vscode"><img src="https://cdn.jsdelivr.net/gh/uni-helper/uni-cloud-snippets-vscode@main/banner.svg" alt="banner" width="100%"/></a>

# @uni-helper/uni-cloud-snippets-vscode

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/uni-helper/uni-cloud-snippets-vscode@main/logo.svg" alt="logo" width="256" height="256" />
</p>

<p align="center">
  <a href="https://github.com/uni-helper/uni-cloud-snippets-vscode/stargazers"><img src="https://img.shields.io/github/stars/uni-helper/uni-cloud-snippets-vscode?colorA=005947&colorB=eee&style=for-the-badge" alt="GitHub Stars"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-cloud-snippets-vscode"><img src="https://vsmarketplacebadges.dev/downloads-short/uni-helper.uni-cloud-snippets-vscode?colorA=005947&colorB=eee&style=for-the-badge" alt="VSCode downloads"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-cloud-snippets-vscode"><img src="https://vsmarketplacebadges.dev/version-short/uni-helper.uni-cloud-snippets-vscode?colorA=005947&colorB=eee&style=for-the-badge" alt="VSCode version"></a>
  <a href="https://open-vsx.org/extension/uni-helper/uni-cloud-snippets-vscode"><img src="https://img.shields.io/open-vsx/dt/uni-helper/uni-cloud-snippets-vscode?colorA=005947&colorB=eee&style=for-the-badge" alt="OpenVSX downloads"></a>
  <a href="https://open-vsx.org/extension/uni-helper/uni-cloud-snippets-vscode"><img src="https://img.shields.io/open-vsx/v/uni-helper/uni-cloud-snippets-vscode?colorA=005947&colorB=eee&style=for-the-badge" alt="OpenVSX version"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/github/license/uni-helper/uni-cloud-snippets-vscode?colorA=005947&colorB=eee&style=for-the-badge" alt="License"></a>
</p>
<p align="center">
  <a href="https://github.com/ModyQyW"><img src="https://img.shields.io/badge/Author%20%26%20Maintainer-ModyQyW-blue?style=for-the-badge" alt="Author & Maintainer"></a>
</p>

为 [uni-app](https://uniapp.dcloud.net.cn/) 的 [uni-cloud](https://doc.dcloud.net.cn/uniCloud/) 提供基本能力代码片段。

不想看文档？直接问 AI 🤖 <a href="https://deepwiki.com/uni-helper/uni-cloud-snippets-vscode"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>

> **请考虑持续[赞助](https://github.com/ModyQyW/sponsors)以维持该项目的持续健康发展，非常感谢！🙏**

[改动日志](https://github.com/uni-helper/uni-cloud-snippets-vscode/blob/main/CHANGELOG.md)

## 插件特性

- uni-cloud 基本能力代码片段
- 参考 [uni-cloud 官方文档](https://doc.dcloud.net.cn/uniCloud/)
- 参考 [Vue.js 2 风格指南](https://v2.cn.vuejs.org/v2/style-guide/) 和 [Vue.js 3 风格指南](https://cn.vuejs.org/style-guide/)

**插件和文档的冲突之处，请以文档为准。**

## 使用

安装插件后重启 VSCode 即可。

## HTML / Vue 组件

| Prefix | Description |
| --- | --- |
| `unicloud-db`, `<unicloud-db>` | 数据库查询组件。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/unicloud-db.html>。 |

## JavaScript / TypeScript

| Prefix | Description |
| --- | --- |
| `uniCloud.importObject` | uniCloud 客户端获取云对象引用以调用云对象接口。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.callFunction` | uniCloud 客户端调用云函数。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.database` | uniCloud 客户端获取云数据库实例。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.databaseForJQL` | uniCloud 客户端获取云数据库实例（JQL 语法）。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/clientdb.html>。 |
| `uniCloud.uploadFile` | uniCloud 客户端上传文件到云存储。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.getTempFileURL` | uniCloud 客户端获取云存储文件的临时路径。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.chooseAndUploadFile` | uniCloud 客户端选择文件并上传。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.getCurrentUserInfo` | uniCloud 客户端获取当前用户信息（同步方法）。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.init` | uniCloud 客户端同时使用多个服务空间时初始化额外服务空间。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.addInterceptor` | uniCloud 客户端新增拦截器。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.removeInterceptor` | uniCloud 客户端移除拦截器。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.interceptObject` | uniCloud 客户端拦截云对象请求。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.onResponse` | uniCloud 客户端监听服务端（云函数、云对象、clientDB）响应。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.offResponse` | uniCloud 客户端移除监听服务端（云函数、云对象、clientDB）响应。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.onNeedLogin` | uniCloud 客户端监听需要登录。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.offNeedLogin` | uniCloud 客户端移除监听需要登录。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.onRefreshToken` | uniCloud 客户端监听登录态更新事件。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.offRefreshToken` | uniCloud 客户端移除监听登录态更新事件。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.initSecureNetworkByWeixin` | uniCloud 客户端在微信小程序安全网络请求发送之前与云函数握手。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.getFileInfo` | uniCloud 客户端使用阿里云公测版云存储链接获取商用版云存储链接。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.setCustomClientInfo` | uniCloud 客户端设置自定义客户端信息，传递到所有云函数、云对象和 clientDB 请求。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.onFailover` | uniCloud 客户端监听故障转移事件。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.offFailover` | uniCloud 客户端移除监听故障转移事件。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/client-sdk.html>。 |
| `uniCloud.database` | uniCloud 云函数/云对象获取云数据库实例。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.databaseJQL` | uniCloud 云函数/云对象获取云数据库实例（JQL 语法）。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.redis` | uniCloud 云函数/云对象获取 Redis 实例。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.uploadFile` | uniCloud 云函数/云对象上传文件到云存储。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.downloadFile` | uniCloud 云函数/云对象下载云存储文件到当前运行环境。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.deleteFile` | uniCloud 云函数/云对象删除云存储文件。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.getTempFileURL` | uniCloud 云函数/云对象获取云存储文件临时路径。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.customAuth` | uniCloud 云函数/云对象使用云厂商自定义登录（仅腾讯云支持）。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.callFunction` | uniCloud 云函数/云对象中调用另一个云函数。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.importObject` | uniCloud 云函数/云对象中调用另一个云对象。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.httpclient` | uniCloud 云函数/云对象通过 HTTP 访问其他系统。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.httpProxyForEip.get` | uniCloud 云函数/云对象使用云厂商代理发送 GET 请求（仅阿里云支持）。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.httpProxyForEip.postForm` | uniCloud 云函数/云对象使用云厂商代理发送 POST 表单请求（仅阿里云支持）。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.httpProxyForEip.postJson` | uniCloud 云函数/云对象使用云厂商代理发送 POST JSON 请求（仅阿里云支持）。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.httpProxyForEip.post` | uniCloud 云函数/云对象使用云厂商代理发送 POST 请求（仅阿里云支持）。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.sendSms` | uniCloud 云函数/云对象发送短信。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.getPhoneNumber` | uniCloud 云函数/云对象获取一键登录手机号。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.init` | uniCloud 云函数/云对象获取指定服务空间实例。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.getRequestList` | uniCloud 云函数/云对象获取当前实例正在处理的请求 ID 列表。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.getClientInfos` | uniCloud 云函数/云对象获取当前实例正在处理的请求对应的客户端信息列表。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.getCloudInfos` | uniCloud 云函数/云对象获取当前实例正在处理的请求对应的云端信息列表。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.request` | uniCloud 云函数/云对象发送简化的 HTTP 请求。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.connectSocket` | uniCloud 云函数/云对象建立 WebSocket 连接。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |
| `uniCloud.logger` | uniCloud 云函数/云对象打印日志到 uniCloud Web 控制台日志系统。更多信息查看 <https://doc.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8>。 |

## 许可证

[MIT](./LICENSE) © 2020-present [uni-helper](https://github.com/uni-helper)
