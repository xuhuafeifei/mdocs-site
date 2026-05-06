# 所见皆文件

mdocs 的存储模型将文档目录树映射为两层结构：

- **SQLite** 维护逻辑关系（父子、权限、元数据）
- **文件系统** 存储实际内容（Markdown / Lexical JSON）

## 逻辑结构

`documents` 表中的每行记录代表一个节点：

| `file_type` | 含义 | `relative_path` | `parent_id` |
|-------------|------|-----------------|-------------|
| `dir` | 目录 | 域内相对路径（如 `folder/sub`） | 指向父目录的 `document_id` |
| `md` | 文档 | 完整路径（如 `folder/sub/a.md`） | 指向父目录的 `document_id` |

目录树由 `parent_id` 关系直接确定，不依赖路径切割。

## 物理存储

文档内容以 Lexical JSON 格式写入磁盘：

```
~/.mdocs/files/docs/{domain_id}/folder/sub/a.md
```

- `{domain_id}` 是域的唯一标识，每个域拥有独立的磁盘子目录
- 磁盘路径与 `relative_path` 一一对应
- 目录节点（`file_type = 'dir'`）不写磁盘文件，仅存在于数据库中

## 目录描述

每个目录可以附带一个 `___desc___.md` 文件：

- 路径为 `{dirPath}/___desc___.md`
- `parent_id` 指向该目录的 `document_id`
- 前端用其内容作为目录描述展示

## 设计意图

- SQLite 管理逻辑结构（谁是父目录、谁有权限）
- 文件系统管理实际数据（Markdown / JSON 内容）
- 域之间在磁盘上完全隔离，不同域可以拥有同名文件
