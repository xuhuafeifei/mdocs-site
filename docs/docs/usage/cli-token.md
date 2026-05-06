# CLI Token

CLI Token 是给命令行工具和 AI Agent（如 Claude Code）使用的身份令牌，继承你在 mdocs 中的所有权限。Token 与你的访客身份绑定，创建后可以通过 HTTP API 读写文档。

## 适用场景

- **命令行管理**：在服务器上通过脚本批量创建或更新文档
- **Agent 集成**：让 AI 编程助手直接读写你的知识库
- **CI/CD 流水线**：在自动化流程中同步文档

## 创建 Token

1. 打开 mdocs 的设置页，切换到「通用」Tab。
2. 找到 **CLI Token** 卡片，点击「创建」。
3. 系统会生成一个新的 Token，**仅在此时展示一次**，请立即复制保存。

![CLI Token 创建界面](/images/cli-token-create.png)

> Token 是高熵随机字符串（32 字节，base64url 编码），安全强度与 Web 端访客令牌相同。

## 重置 Token

如果 Token 泄露或想更换，点击「重置」：

1. 点击「重置」按钮，弹出确认弹窗。
2. 确认后，系统会吊销所有已有 Token 并生成一个新的。
3. 新的 Token 同样**仅在此时展示一次**，请立即复制保存。

## 使用 Token

在命令行或 Agent 配置中，通过 `x-cli-token` 请求头发送：

```bash
# 使用 curl
curl -H "x-cli-token: <你的 token>" https://your-mdocs-server.com/api/documents

# 或设置环境变量
export MDOCS_TOKEN="<你的 token>"
```

Token 继承你当前访客的所有权限——能读的文档它也能读，能写的文档它也能写。

## 管理 Token

在设置页的 CLI Token 卡片中，你可以看到所有已创建的 Token 列表及状态（「活跃」/「已吊销」）。当前同一访客只保持一个活跃 Token，重置时会自动吊销旧的。

## 安全说明

- 服务端只存储 Token 的 SHA-256 哈希值，即使数据库泄露也无法伪造请求
- 原始 Token 仅在创建时展示一次，关闭后无法再次查看
- 如怀疑 Token 泄露，请立即重置
