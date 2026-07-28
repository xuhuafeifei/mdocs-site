# map — docs 内容

### 文档入口与侧栏

- **关键词**：`sidebar` `docs/index` `上手助手`
- **定位**：
  | 路径 | 符号 |
  |------|------|
  | `docs/docs/index.md` | 手册目录 |
  | `rspress.config.ts` | `themeConfig.sidebar['/docs/']` |
  | `docs/docs/usage/onboarding-ai.md` | 上手 Agent 手册 |
  | `docs/docs/usage/agent-dev-loop.md` | Agent 开发闭环总览 |
  | `docs/docs/usage/cli-token.md` | CLI Token |
  | `docs/docs/changelog.md` | 更新日志 |

### 与 mdocs / mdocs-cli 的关系

- **关键词**：`agent-skills` `mdocs-dev` `手册真源`
- **依据（外仓）**：
  | 路径 | 说明 |
  |------|------|
  | `~/github/mdocs/.mdocs-docs/requirements/onboarding-ai/` | site = 手册真源 → 打包进 `agent-skills` |
  | `~/github/mdocs/.mdocs-docs/decisions/010-onboarding-agent-pi-skills.md` | Pi + Skills + 无写作 |
  | `~/github/mdocs-cli/skills/` | `mdocs-cli` / `mdocs-dev` / `diagram` |
