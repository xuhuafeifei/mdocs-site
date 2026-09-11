# HTML 文档

mdocs 支持与 Markdown 平级的 **HTML 文档**（`file_type=html`，磁盘路径以 `.html` 结尾）。权限、提交历史、目录树、**顶栏能力**与 Markdown 相同；正文按 **HTML 原文** 存盘与草稿，不经 Lexical。

## 创建

侧栏「新建」下拉选择 **HTML**。默认文件名如 `untitled.html`。

## 预览与编辑

- 打开后 **默认预览**（忽略「自动进入编辑」设置）
- 预览使用 `iframe` + 最严 `sandbox=""`：**不执行脚本**，避免 XSS 进主应用
- 可手动切换 **编辑**（源码 textarea）与 **预览**；模式不会因输入自动跳回

## 顶栏（与 Markdown 共用 DocChrome）

标题、域选择、同步、发布、删除、收藏、文档信息（邀请 / 改权限）、**评论**；窄屏 reader 同壳。

**AI 帮写**：HTML 同样提供入口。工作台仍是 Markdown 对话，但进场时以 HTML 原文作为初始稿，完成后写回 HTML 草稿，全程不做 Markdown ↔ HTML 静默转换。

## 草稿、发布与冲突

- 自动保存进浏览器 IndexedDB，字段 `contentKind=html`
- 发布走与 Markdown 相同的乐观锁；冲突时三路 merge **直接用 HTML 字符串**，不走 Markdown↔Lexical 转换

## 与 Markdown 的差异

| 能力 | HTML |
|------|------|
| 全文搜索 | 不索引正文 |
| 知识图谱 | 不参与抽取 |
| 评论 | 支持 |
| 顶栏 / AI 帮写 | 支持 |

## 安全注意

预览沙箱初版不允许脚本；外链图片 / CSS 仍可能加载。不要把不可信 HTML 当成可执行页面托管。
