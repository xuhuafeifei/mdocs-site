# 配置文件

## 配置文件路径

mdocs 启动时会自动查找当前目录的 `mdocs.config` 文件。

## 完整配置示例

```yaml
# 服务配置
server:
  port: 3000
  host: 0.0.0.0

# 域配置
domain:
  name: my-kb
  public: false

# 存储配置
storage:
  path: ./docs
  db: ./mdocs.db

# 日志
log:
  level: info
  file: ./mdocs.log
```

## 环境变量

所有配置项也可通过环境变量设置：

```bash
export MDOCS_PORT=3000
export MDOCS_DOMAIN_NAME=my-kb
```
