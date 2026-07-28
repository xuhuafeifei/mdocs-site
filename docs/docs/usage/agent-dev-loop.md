# Agent 开发闭环

mdocs 不只给人在浏览器里写文档，也让 **外部 AI Agent**（Cursor、Claude Code、Codex 等）把知识库嵌进日常工作。

这和产品内的 [上手助手（AI）](./onboarding-ai.md) 是两条路：

| | 上手助手 | Agent 开发闭环 |
|--|----------|----------------|
| 在哪 | mdocs Web 浮层 | 你的 IDE / Agent 终端 |
| 干什么 | 答「怎么用 mdocs」 | 读知识库、按契约开发、按需写回文档 |
| 会不会改正文 | **不会**（不代写） | 会按你的指令经 CLI 读写文档 |

---

## 一次性准备

1. 在 mdocs **设置 → 通用** 创建 [CLI Token](./cli-token.md)，并：

```bash
export MDOCS_TOKEN="你的 token"
# 非本机时再设，例如：
# export MDOCS_SERVER="http://127.0.0.1:4000"
```

2. 克隆 CLI + Skills，并分发到你用的 Agent：

```bash
git clone https://github.com/xuhuafeifei/mdocs-cli.git ~/.mdocs-cli
cd ~/.mdocs-cli && ./distribute-skill.sh cursor   # 或 claude / 多个 agent
```

会把 **`mdocs-cli`**、**`mdocs-dev`**、**`diagram`** 装到对应 Agent 的 skills 目录。之后在对话里用 `/mdocs-cli`、`/mdocs-dev` 等即可唤起。

更细的命令与环境变量见 [CLI Token · CLI 客户端](./cli-token.md#cli-客户端)。

---

## 最基础：`/mdocs-cli` + 文章 URL

**你不必先背命令。** 只要：

1. Agent 已加载 **mdocs-cli** skill（例如输入 `/mdocs-cli`，或确保 skill 已分发且会话会加载它）
2. 环境里有可用的 `MDOCS_TOKEN`（以及必要时的 `MDOCS_SERVER`）
3. 把 **mdocs 文章的浏览器地址**丢给 Agent，用自然语言说要做什么

示例（与真实使用一致）：

```text
/mdocs-cli
http://localhost:5173/#/doc/7d78023e-9155-4551-84dc-2dd4e2e44841
看下这个文章对应目录的所有文章内容
```

Agent 会自行：

1. 从 URL 里解析 **文档 ID**（`#/doc/<uuid>`）
2. 按需准备 `~/.mdocs-cli`（clone / 更新；失败时可用本地已有副本继续）
3. 调用对应子命令（如上例是 `ls <documentId>` 列同级目录）
4. 用返回的 JSON 回答你

![在 Agent 中用 /mdocs-cli + 文章 URL](./agent-dev-loop/mdocs-cli-usage.png)

### 你还可以怎么说

| 你想做的事 | 示例说法 |
|------------|----------|
| 读这篇 | 「打开这篇 URL，总结要点」 |
| 看同级目录 | 「这个文章对应目录下有哪些文件」（上图） |
| 搜知识库 | 「在 mdocs 里搜『草稿』相关」 |
| 改 / 新建 | 「根据刚才结论，更新这篇」或「在同级建一篇笔记」（需你明确授权写回） |

底层命令仍是 `search` / `get` / `ls` / `list` / `create` / `update` 等；对日常使用，**URL + 自然语言** 就够了。

---

## `/mdocs-dev`：开发流程（详细）

知识库读写用 **mdocs-cli**；**在业务仓库里把需求想清楚、再写代码**，用 **`/mdocs-dev`**。

### 什么时候输入 `/mdocs-dev`

在 Cursor / Claude 等对话里输入：

```text
/mdocs-dev
```

或附带一句话说明意图，例如：

```text
/mdocs-dev
我想给设置页加「导出 Markdown」，你先按契约走
```

Agent 会按 **mdocs-dev** skill 工作：在项目根维护 **`.mdocs-docs/` 开发契约**，**先对齐设计、经你同意后再改业务代码**。

### 契约落在哪

```
<项目根>/.mdocs-docs/
├── README.md              # 总索引
├── map/                   # 机器坐标：关键词 → 文件/符号（不贴大段代码）
├── diagrams/              # Mermaid 图（用 diagram skill）
├── decisions/             # ADR：为什么这样设计
├── bug-fixes/             # 事后修复记录
└── requirements/<需求名>/
    ├── 需求分析.md        # 给人：范围、验收
    ├── 设计契约.md        # 给人审；须「已同意」才能写代码
    └── 代码索引.md        # 给机器：本需求入口定位
```

### 标准步骤（Agent 应遵守）

```
1. 判场景：新需求 / 改老需求 / 整理老业务 / 记 bug 修复
2. 读 .mdocs-docs/README.md、map/、已有需求夹（防重复建 xxx-v2）
3. 写或更新「需求分析」「设计契约」
4. 把设计契约给你看 → 等你明确说「同意」
5. 未同意：只改契约文档，禁止动业务代码
6. 同意后：写代码，并更新「代码索引」/ map（入口变了才改）
7. 你要求「推 mdocs / 落库」时，再用 mdocs-cli 把定稿推到知识库
```

### 四种场景怎么走

| 场景 | Agent 默认做什么 |
|------|------------------|
| **新需求** | 新建 `requirements/<短名>/`，先分析再设计 |
| **改老需求** | **更新原文件夹**，禁止另开 `xxx-v2` |
| **整理老业务** | 只增厚 `map/`，不写长篇用户故事 |
| **记 bug 修复** | 写 `bug-fixes/<短标题>-日期.md`（事后记录，不走设计门控） |

意图不清时，Agent **只应问一句**：新需求、改老需求、整理老业务，还是记 bug？

### 和 `/mdocs-cli` 怎么配合

| 阶段 | 用哪个 |
|------|--------|
| 查团队知识库里已有设计 / 笔记 | `/mdocs-cli` + URL 或搜索 |
| 在本仓库落需求与设计、等人审 | `/mdocs-dev` |
| 画架构 / 时序给人看 | `diagram` skill（图进 `.mdocs-docs/diagrams/`） |
| 定稿后写进 mdocs | 你明确要求后，再用 **mdocs-cli** `create` / `update` |

**默认不推库**：契约先只存在 Git 仓库里；避免 Agent 未经允许改线上文档。

### 你这边的检查点

- 设计契约状态是否写成 **已同意**（含日期）再让 Agent 动代码  
- 结论是否能指到 `map` / 路径 / decisions，而不是空口承诺  
- 改老需求是否仍在**同一个** `requirements/...` 目录  

---

## Skills 一览

| Skill | 作用 |
|-------|------|
| **mdocs-cli** | HTTP CLI：搜 / 读 / 列 / 建 / 改文档与目录 |
| **mdocs-dev** | `.mdocs-docs` 契约 + 设计门控 |
| **diagram** | Mermaid 图落盘并索引 |

仓库：[github.com/xuhuafeifei/mdocs-cli](https://github.com/xuhuafeifei/mdocs-cli)

---

## 和上手助手的知识关系

- **本站文档**是给人读的手册真源。
- mdocs 上手 Agent 构建时会把本站手册打成包内 Skills。
- 因此：改好本站使用说明，既服务人类读者，也服务产品内 AI。
