# 域隔离（Domain）

## 设计意图

mdocs 中的「域」是最顶层的逻辑隔离单元。它的设计目标是：

- 不同团队或项目之间的文档在**浏览入口**（域列表、侧栏树）上彼此隔离
- 在不引入复杂 RBAC 的前提下实现最基本的访问边界
- 让每个用户拥有一个「个人域」作为私密工作区

域是存在于数据库逻辑上的虚拟概念，文档通过 `domain_id` 字段归属到某个域。

## 三种域类型

| 域类型 | 谁可以进入 | 文档 permission 档位 | 用途 |
|--------|-----------|---------------------|------|
| **public**（公开域）| 任何人（含未登录访客） | 仅 `public_read(3)`、`public_write(4)` | 开放协作，默认域 |
| **restricted**（受限域）| **域成员** 与 **创建者** 为完整入口；仅被某篇文档 invite 的访客为受限入口（可见相关文档，**不能**凭此在域内任意新建文档） | 仅 `domain_read(1)`、`domain_write(2)` | 团队内部知识库 |
| **private**（个人域）| 仅域主（`domain_id === visitor_id`） | 0～4 **全部**档位均可 | 私人笔记本 |

> 域类型会**约束**域内文档可选的 permission 值——public 域不允许 private 档，restricted 域不允许 public 档。这是与之前版本的关键区别。

## 五级文档权限

每篇文档有一个 `permission` 字段（0～4），定义谁能读、谁能写（在「能接触到该文档」的前提下）：

| 数值 | 名称 | 谁可读 | 谁可写 |
|------|------|--------|--------|
| 0 | private | 仅 owner | 仅 owner |
| 1 | domain_read | 域成员 | 仅 owner |
| 2 | domain_write | 域成员 | 域成员 |
| 3 | public_read | 任何人 | 仅 owner |
| 4 | public_write | 任何人 | 任何人 |

<!-- ![权限矩阵示意图](./domain/permission-matrix.png) -->

### 档位与域类型的约束关系

| 域类型 | 允许的文档 permission | 说明 |
|--------|----------------------|------|
| **public** | **仅** `public_read(3)`、`public_write(4)` | 公开域内不允许出现「仅域成员」或「仅 owner」的文档 |
| **restricted** | **仅** `domain_read(1)`、`domain_write(2)` | 受限域内文档不暴露给域外任何人；非成员若需访问则靠 **invite** 叠加 |
| **private** | **全部** 0～4 | 不设档位上限；private 域下文档也可以设为 `public_write(4)` 对外公开 |

### 创建默认值

| 域类型 | 新建文档默认 permission |
|--------|----------------------|
| private | `private(0)` |
| restricted | `domain_read(1)` |
| public | `public_read(3)` |

## invite：独立叠加层

在五级权限之上，还有一个独立于档位的 **invite** 机制：owner 可以为任意一篇文档添加受邀者（read / edit），不受文档当前档位限制。

- invite **不是**一个权限档位（它不是 0～4 中的一员）
- invite 与域成员**互斥**：已经是域成员的人，不能再被 invite
- 鉴权顺序：owner → 档位语义 → invite 兜底

详见 [文档级邀请](./invitation.md)。

## 鉴权流程（概要）

```
读权限：
  1. owner → 放行
  2. public 域 → 3/4 档放行
  3. restricted 域 → 域成员走 1/2 档；非成员走 invite
  4. private 域 → 按档位实际语义 + invite

写权限：
  1. owner → 放行
  2. public 域 → 仅 4 档放行
  3. restricted 域 → 仅 2 档且为域成员；非成员走 invite
  4. private 域 → 按档位实际语义
```

## 个人域（Private）

- 每个访客注册时自动创建一个个人域，`domain_id` 等于该访客的 `visitor_id`
- 个人域**只有域主一个成员**（不通过 `domain_members` 表维护多成员）
- 文件权限可设为 0～4 任意档位——即使名为「个人」域，也可以公开某篇文档
- 创建文档时默认权限为 `private(0)`

## 列表 vs 直链

侧栏树、域下列表会按域准入过滤；若某人持有**文档 ID 直链**，读权限主要由**文档档位 + invite** 决定——例如 restricted 域内一篇 `domain_read` 文档，对非域成员不可读（除非被 invite）。需要更强保密时，请用 **`private(0)`** 档。

## 设计取舍

- **不引入团队/组织树**：域只是逻辑标签。对于小团队，一个 public 域 + 每人一个 private 域就足够
- **域隔离在 SQL 层面，不在文件系统**：Markdown 等内容在 `~/.mdocs/files/docs/` 路径下按相对路径存放，`domain` 只存在于数据库；跨域「移动」只需改数据库记录

**操作说明**（创建受限域、维护成员、套用模板）：见 [受限域成员与名单模板](../usage/domain-members.md)。

行为以 mdocs 应用代码与 SQLite schema 为准；随版本迭代本页会跟进。
