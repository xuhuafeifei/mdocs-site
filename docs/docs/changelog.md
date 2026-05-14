# 更新日志

## v0.7.4

- **从上游根本解决编辑器内容溢出问题**：升级 `@fgbg/lobe-editor` 至 `1.0.0-fork.9`
  - **表格宽度溢出修复**：在 `.editor_table_scrollable_wrapper` 增加 `min-width: 0`，解决 flex 布局下宽表格撑开父容器的经典问题
  - **图片宽度溢出修复**：在 `.image` / `.blockImage` 样式中增加 `img { max-width: 100% !important; }`，防止大图片横向撑开编辑器
- **修复 Outline 大纲被挤出视野**：给 Editor + Outline 共享的外层 Block 增加 `minWidth: 0`，确保左侧目录树展开时，大纲不会被宽表格挤出视野
- **保留 mdocs 侧补丁作为双重保险**：待上游稳定后可移除
- **升级 `@fgbg/lobe-editor` 至 `1.0.0-fork.10`**（仍属 v0.7.4 产品线，仅上游编辑器迭代；mdocs 应用包版本号未改）：
  - **Markmap**：`---markmap---` 正确注册 `IMarkdownShortCutService`；嵌套 `textarea` 粘贴不再走主编辑器 Markdown 粘贴链路；预览区按钮可右下角
  - **链接**：左键重复打开链接编辑浮层；⌘/Ctrl+单击或中键新标签打开；修复异步场景 `getLatest` 报错（改为 `read` + `$getNodeByKey`）；`EDIT_LINK_COMMAND` 移至 `LinkNode.ts`


## v0.7.3

- **新增 Markmap 思维导图支持**：在 ` ```markmap ` 代码块中输入 Markdown 即可渲染为可交互思维导图
  - 实时预览：编辑 Markdown 时下方实时渲染思维导图
  - 全屏预览：点击图表进入全屏模式，支持缩放、拖拽
  - 错误处理：语法错误时显示友好的红色错误提示
  - 交互一致：与 Mermaid 流程图的交互行为完全相同
  - 升级 `@fgbg/lobe-editor` 至 `1.0.0-fork.7`
- **修复编辑器图片宽度溢出问题**：增加 `.mdocs-editor-content-area img { max-width: 100% !important; }` 样式规则，覆盖 Antd Image 组件的内联样式，防止大图片横向撑开编辑器容器

## v0.7.2

- **修复登录接口被 auth 中间件拦截的问题**：新增 `/visitors/login` 到豁免路径白名单，解决登录时提示 `missing visitor token` 的错误

## v0.7.0

- **新增登录密码功能**：解决跨浏览器/跨设备登录痛点，访客可设置密码，在任何设备使用「用户名+密码」登录
  - 注册弹窗改为 Tab 结构：左侧注册、右侧登录，无需跳转页面
  - 注册两步流：输入名称 → 可选设置密码
  - 登录支持两种方式：用户名密码 / 恢复码
  - 设置页新增「登录密码」管理卡片，可随时修改密码
- **多设备同时在线**：新增 `visitor_sessions` 会话表，支持多个设备同时登录同一账号，互不干扰
- **向后兼容**：未设置密码的访客仍可在原设备正常使用；所有已存在账号默认密码为 `1234`，登录后可自行修改

## v0.6.9

- **升级 @lobehub/editor 至 1.0.0-fork.6**，同步上游修复：
  - **修复 Meta2d 弹窗按钮暗色模式不可见**：DiagramEditor 弹窗硬编码 `background: '#fff'` 但未重置文字颜色，暗色主题下所有按钮（撤销/重做/删除/适应/100%/关闭）白底白字。加 `color: '#000'` 修复
  - **Meta2d 流程图 SVG 预览导出稳定**：SVG 导出优先用当前编辑实例而非隐藏实例重放，修复多 pen 场景部分导出为空
  - **修复划词 ColorPicker 选色后跳回黑色**：selection 为 null 时保留上次检测到的颜色值
  - **Locale 深合并 + BlockImage 插入光标流**：
    - `registerLocale()` 改为深合并，避免插件注册 `{codemirror:{...}}` 时覆盖已有 `meta2d.editor` 等嵌套 key
    - BlockImageNode 通过 `---meta2d---` 或粘贴插入后，自动创建空白段落并定位光标，不再卡在图片后无法继续输入

## v0.6.8

- **修复划词 ColorPicker 选色后跳回黑色**：修复选中文本后通过浮动工具栏的 ColorPicker 设置颜色时，颜色面板立即跳回黑色的问题。根因为 `useEditorState` 在 selection 为 null（如 ColorPicker popup 导致编辑器失焦）时错误清空了 `textColor`/`bgColor`，现改为保留上一次检测到的颜色值，避免无选区时误判格式状态
- **升级 @lobehub/editor 至 1.0.0-fork.4**，同步上游修复：
  - **修复编辑器销毁泄漏**：`ReactEditor` 和 `useEditor` 增加 `destroy()` cleanup，配合 `pendingDestroyRef` + `queueMicrotask` 兼容 StrictMode remount
  - **Markdown 粘贴智能检测**：移除评分机制改为始终转换，代码块内粘贴防光标跳转，Mermaid 错误友好提示，空链接 Enter 自动转换
  - **Meta2d 流程图预览修复**：SVG 预览与下载尺寸对齐，过滤 `isShowChild=false` 的 pens，高大预览图自动居中并支持滚动
  - **工具栏状态即时更新**：移除 500ms debounce，加粗/斜体/颜色等状态立即响应
  - **大纲工具栏切换**：新增 `useOutlineActionItem`，工具栏可一键展开/折叠大纲面板

## v0.6.7

- **草稿发布失败恢复机制**：自动发布遇到服务端文档不存在（404）时，草稿不再静默丢失或无限循环报错，而是标记为发布失败状态并通知用户；用户可在草稿列表页点击「另存为新文档」，通过域选择器 + 目录树选择目标位置，将草稿内容作为全新文档重新发布
- **修复 Lexical 编辑器内存泄漏**：修复切换文档时内存飙升至 40GB 的致命问题。根因为 `@lobehub/editor` 的 `ReactEditor` 组件创建编辑器实例后从不调用 `destroy()`，且 `DocumentEditor` 使用 `key` 强制重新挂载导致每次切换都泄漏一个完整的编辑器实例（含 CodeMirror、Meta2d Canvas、图片等 DecoratorNode 资源）。上游 `ReactEditor` 和 `useEditor()` hook 已增加 `destroy()` cleanup，mdocs 侧移除多余的 `key` 并增加防御性清理
- **兼容 React StrictMode 的编辑器生命周期**：修复 StrictMode 开发环境下 `editor.destroy()` 后重新挂载导致 `DataSource for type "json" is not registered` 报错。采用 `pendingDestroyRef` + `queueMicrotask` 延迟取消模式：cleanup 中把 destroy 排队到 microtask，若紧接着是 StrictMode remount 则同步取消，真正卸载时才执行销毁
- **批量修复异步组件卸载泄漏**：为 `CommentsPanel`、`SettingsPage`、`DraftListPage`、`RecoveryDialog`、`DocumentEditor` 的异步请求增加卸载保护。`CommentsPanel` 采用 `expectedDocumentIdRef` 竞态保护丢弃旧请求；其余组件采用 `mountedRef` 模式防止卸载后 `setState`
- **浏览器资源泄漏清理**：修复 Playground 中 `URL.createObjectURL` 未 `revokeObjectURL` 的问题；修复 `actions.ts` 文件选择器在 Safari 中取消后 DOM 节点未移除的问题（增加 5s 兜底超时）；修复 Playground 卸载后 `window.editor` 和 debounce 定时器未清理的问题

## v0.6.6

- **设置页面大改版**：重新组织设置导航，新增「我的收藏」和「我的文章」两个独立 Tab
- **我的收藏表格视图**：收藏列表改为表格布局，支持标题搜索，显示域名、作者、收藏时间四列
- **我的文章列表**：集中展示当前访客创建的所有文档，按更新时间倒序排列；支持标题/域名搜索；每篇可直接打开或邀请成员
- **文档邀请快捷入口**：我的文章列表每行新增「邀请成员」按钮，无需打开文档即可配置访问权限

## v0.6.5

- **自动保存性能优化**：修复 `useAutoSave` Hook 中 `useCallback` 依赖循环问题，使用 `useRef` 保存频繁变化的值，避免 Lexical 监听器反复注册注销，减少不必要的性能开销
- **切换文档竞态修复**：修复快速连续切换文档时，旧请求后返回导致编辑器内容与 URL 中 `documentId` 不匹配的问题，新增 `expectedDocIdRef` 竞态检查机制
- **评论列表性能优化**：`CommentsPanel` 评论列表渲染从 O(n*m) 优化为 O(n)，使用 `useMemo` + Map 单次遍历完成根评论与回复分组，同时顺便计算未删除评论总数
- **编辑器初始化优化**：移除 `DocumentEditor.handleInit` 中重复的 `JSON.parse` 逻辑，直接复用已预计算的 `contentType`
- **代码清理**：删除已标记 `@deprecated` 的 `deleteFolderApiV0` 函数（已被递归删除目录的 `deleteFolderApi` 替代）

## v0.6.4

- **文档邀请成员**：编辑器工具栏文档信息菜单新增「邀请成员」入口，可邀请访客以只读或编辑权限协作文档
- **邀请权限选择**：邀请弹窗中右侧已选成员列表新增 MiniSelect 下拉框，可为每个被邀请人独立设置「只读」/「可编辑」权限
- **MiniSelect 组件**：新增紧凑型通用下拉组件，支持点击外部关闭、Escape 键、键盘可访问
- **邀请编辑 Bug 修复**：修复了被邀请用户虽然能通过后端鉴权但前端编辑器仍以只读模式渲染的问题 — 后端 `getDocument()` 现在返回 `invitedEdit` 标记，前端 `canEdit` 计算补充 invite 检查
- **后端权限修正**：`canEditDocument()` 在 private 域各权限档位下补充 `document_invites` 检查，被 invite edit 的非创建者现在可正常编辑
- **10 条新增单测**：覆盖 invite read/edit 跨所有权限档位（private/domain_read/domain_write/public_read/public_write）

## v0.6.3

- **文档信息菜单**：编辑器工具栏新增三条线菜单按钮，可查看文档元信息（创建者、创建时间、大小、上次编辑），支持快速收藏/取消收藏
- **文档权限修改入口**：文档信息菜单中预留权限修改入口（后续版本开放完整功能
- **收藏功能**：侧边栏新增「我的收藏」入口，支持一键收藏/取消收藏文档，已删除文档的收藏保留显示便于手动取消
- **Lucide SVG 图标**：收藏、退出登录按钮统一使用 Lucide SVG 图标替代 emoji，hover 时有缩放和颜色变化的视觉反馈
- **收藏弹窗大改版**：「我的收藏」弹窗重构为表格布局（`<table>`），标题/域/作者/收藏时间四列对齐；新增名称搜索框和域筛选下拉；每行新增📖快速打开按钮；操作按钮支持即时 tooltip；标题超长时自动截断并显示原生 tooltip；取消收藏有淡出动画
- **作者与收藏时间显示**：后端 LEFT JOIN visitors 表获取文档作者名，前端每行展示作者 + `Intl.RelativeTimeFormat` 相对时间（自动适配中英文）
- **Cookie 有效期延长**：身份 Cookie 从 1 年延长到 10 年，实现"永久"登录体验
- **登录态稳定性优化**：修复因请求头占位符覆盖有效 Cookie 导致刷新后需要重新登录的问题

## v0.6.2

- **访客名称全局唯一**：`visitor_name` 增加数据库 `UNIQUE` 约束，避免同名混淆
- **migrate 支持按名称迁移**：`pnpm mdocs visitor migrate --from Alice --to Bob`，不再需要输入 UUID
- **个人域路径处理移到后端**：前端不再需要 visitorId 判断路径，Tree API 自动根据当前访客身份返回美化后的路径
- **登录态 BUG 修复**：修复了因请求头占位符覆盖有效 Cookie 导致刷新后需要重新登录的问题

## v0.6.0

- **访客恢复码**：新增访客身份恢复机制，生成一次性恢复码，丢失浏览器本地 token 后可凭码恢复访客身份及所有文档权限

## v0.5.0

- **全文搜索**：新增 FTS5 搜索引擎，支持中文分词（jieba），在搜索框输入关键词即可按 BM25 相关性排序检索全库文档
- **后端 Markdown 转 Lexical**：编辑器和 API 支持直接传入 Markdown 文本，后端自动转换为 Lexical JSON 存储。CLI 客户端 `create` / `update` 默认使用 `contentFormat: 'markdown'`
- **域切换持久化**：刷新页面后域选择不丢失，自动恢复到上次浏览的域
- **mdocs-cli 命令行客户端**：新增独立 CLI 工具仓库 `https://github.com/xuhuafeifei/mdocs-cli`，提供 `search`、`get`、`create`、`update`、`domains`、`mkdir` 六个命令，Token 在设置页创建

## v0.4.0

- **CLI Token**：新增命令行身份令牌，可在设置页创建/重置，支持 `x-cli-token` 认证头，继承访客所有权限
- **ConfirmDialog 组件**：通用确认弹窗，替代原生 `window.confirm`

## v0.3.0

- **显式目录模型**：引入 `file_type`（`'dir'` / `'md'`）和 `parent_id`，目录不再是路径切割的产物
- **空目录支持**：可以创建没有子文档的空目录
- **磁盘路径域隔离**：每个域拥有独立的磁盘子目录（`~/.mdocs/files/docs/{domain_id}/`），不同域同名文件不再冲突
- **目录描述文件改名**：从 `desc.md` 改为 `___desc___.md`，避免与用户创建的文件冲突
- **新建目录接口**：新增 `POST /api/folders`，创建目录时自动创建 `___desc___.md`
- **树构建优化**：按 `parent_id` 一次查询建树，不再递归切割路径

## v0.2.0

- **权限模型重构**：从四级权限升级为五级权限（`private` → `domain_read` → `domain_write` → `public_read` → `public_write`），invite 从档位改为独立叠加层
- **域约束生效**：public / restricted 域类型现在限制域内文档可选档位（public 仅 3/4，restricted 仅 1/2）
- **邀请互斥**：域成员不能再被 invite，减少权限混淆
- **鉴权收拢**：所有权限判断集中在统一模块，不再分散在各服务和中间件
- 受限域（restricted domain）支持

## v0.1.0

- 项目初始化
- 基于 Lexical 的富文本编辑器，支持标题、表格、代码块、数学公式
- Meta2d 流程图拖拽编辑器
- SQLite + 文件系统存储
- 无账户访客身份识别（UUID token + SHA-256）
- 域隔离（公共域 + 个人域）
- 文档级邀请协作（只读 / 编辑）
- IndexedDB 本地草稿自动保存
- 中英文双语界面
