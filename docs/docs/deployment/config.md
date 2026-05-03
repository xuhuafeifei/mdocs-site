# 配置

mdocs **没有配置文件**。所有配置通过环境变量设置，遵循 12-Factor App 原则。

## 完整配置项

| 环境变量 | 默认值 | 说明 |
|---------|--------|------|
| `MDOCS_HOST` | `127.0.0.1` | 监听地址 |
| `MDOCS_PORT` | `4000` | 监听端口 |
| `MDOCS_DATA_DIR` | `~/.mdocs` | 数据存储根目录 |
| `MDOCS_LOG_LEVEL` | `info` | 日志级别（trace/debug/info/warn/error/fatal/silent） |
| `MDOCS_CONSOLE_LEVEL` | `info` | 控制台日志级别 |
| `MDOCS_CONSOLE_STYLE` | `pretty` | 控制台日志格式（pretty/common/json） |
| `MDOCS_LOG_RETENTION_DAYS` | `14` | 日志保留天数 |
| `MDOCS_LOG_MAX_BYTES` | `5242880` | 单个日志文件最大字节数 |

## 使用示例

```bash
# 修改端口和数据目录
export MDOCS_PORT=3000
export MDOCS_DATA_DIR=/var/data/mdocs

pnpm start
```

或者一行启动：

```bash
MDOCS_PORT=3000 MDOCS_DATA_DIR=/var/data/mdocs pnpm start
```

## 设计思路

- **环境变量 > 配置文件**：适合容器化部署（Docker/K8s），也适合托管平台（Railway、Fly.io 等）
- **无 YAML/TOML/JSON 配置**：减少一层复杂度和配置校验逻辑
