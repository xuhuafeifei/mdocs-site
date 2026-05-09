# 更新日志

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
