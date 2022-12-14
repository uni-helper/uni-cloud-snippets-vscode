# @uni-helper/uni-cloud-snippets-vscode

[![License](https://img.shields.io/github/license/uni-helper/uni-cloud-snippets-vscode)](https://github.com/uni-helper/uni-cloud-snippets-vscode/blob/main/LICENSE)

[![VSCode](https://vsmarketplacebadge.apphb.com/version-short/uni-helper.uni-cloud-snippets-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-cloud-snippets-vscode)

[![OpenVSX](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2Funi-helper%2Funi-cloud-snippets-vscode)](https://open-vsx.org/extension/uni-helper/uni-cloud-snippets-vscode)

[改动日志](https://github.com/uni-helper/uni-cloud-snippets-vscode/blob/main/CHANGELOG.md)

## 插件特性

- uni-cloud 基本能力代码片段
- 参考 [uni-cloud 官方文档](https://uniapp.dcloud.net.cn/uniCloud/)
- 参考 [Vue.js 2 风格指南](https://v2.cn.vuejs.org/v2/style-guide/) 和 [Vue.js 3 风格指南](https://cn.vuejs.org/style-guide/)

**插件和文档的冲突之处，请以文档为准。**

插件源代码在 [uni-helper/uni-cloud-snippets-vscode](https://github.com/uni-helper/uni-cloud-snippets-vscode)。欢迎提交 ISSUE 和 PR 改进本插件。

## 使用

安装插件后重启 VSCode 即可。

## HTML

|API|Prefix|Description|
|-|-|-|
|`<unicloud-db>`|`unicloud-db`, `<unicloud-db>`|数据库查询组件。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/unicloud-db>。|

## JavaScript/TypeScript

|API|Prefix|Description|
|-|-|-|
|`uniCloud.callFunction()`|`uniCloud.callFunction`|uniCloud 客户端调用云函数。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.database()`|`uniCloud.database`|uniCloud 客户端访问云数据库，获取云数据库对象引用。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.uploadFile()`|`uniCloud.uploadFile`|uniCloud 客户端上传文件到云存储。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.getTempFileURL()`|`uniCloud.getTempFileURL`|uniCloud 客户端获取云存储文件的临时路径。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.chooseAndUploadFile()`|`uniCloud.chooseAndUploadFile`|uniCloud 客户端选择文件并上传。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.getCurrentUserInfo()`|`uniCloud.getCurrentUserInfo`|uniCloud 客户端获取当前用户信息。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.init()`|`uniCloud.init`|uniCloud 客户端同时使用多个服务空间时初始化额外服务空间。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.uploadFile()`|`uniCloud.uploadFile`|uniCloud 云函数上传文件到云存储。更多信息查看 <https://uniapp.dcloud.io/uniCloud/storage?id=%e4%ba%91%e5%87%bd%e6%95%b0api>。|
|`uniCloud.getTempFileURL()`|`uniCloud.getTempFileURL`|uniCloud 云函数获取文件下载链接。更多信息查看 <https://uniapp.dcloud.io/uniCloud/storage?id=%e4%ba%91%e5%87%bd%e6%95%b0api>。|
|`uniCloud.deleteFile()`|`uniCloud.deleteFile`|uniCloud 云函数删除云存储文件。更多信息查看 <https://uniapp.dcloud.io/uniCloud/storage?id=%e4%ba%91%e5%87%bd%e6%95%b0api>。|
|`uniCloud.downloadFile()`|`uniCloud.downloadFile`|uniCloud 云函数下载已上传至云开发的文件至本地。更多信息查看 <https://uniapp.dcloud.io/uniCloud/storage?id=%e4%ba%91%e5%87%bd%e6%95%b0api>。|

## 额外推荐

请查看 [uni-helper 插件说明](https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-helper-vscode)。
