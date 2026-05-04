# 更新日志

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
