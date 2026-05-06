# 更新日志

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
