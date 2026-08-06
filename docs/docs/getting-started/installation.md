# 安装

## 环境要求

- **运行时**：Node.js 22+
- **无需额外安装数据库或中间件**

## 快速安装（推荐）

```bash
npm install -g @fgbg/mdocs
```

安装完成后，直接运行：

```bash
mdocs
```

即可启动服务，访问 `http://localhost:4000`。

也可以临时体验：

```bash
npx @fgbg/mdocs
```

## 从源码构建（开发模式）

如果你需要参与开发或自定义功能：

```bash
git clone https://github.com/xuhuafeifei/mdocs
cd mdocs
pnpm install
```

### 启动开发模式

```bash
pnpm dev
```

一条命令同时启动后端（Express，`localhost:4000`）和前端（Vite，`localhost:5173`，自动代理 `/api`）。

### 构建与运行

```bash
pnpm build          # 构建前端 + 编译后端
pnpm start          # 生产模式，同一端口提供前端和 API
```

## CLI 命令

`mdocs` 包附带管理命令：

```bash
# 列出所有访客
mdocs visitor list

# 访客迁移（按名称，推荐）
mdocs visitor migrate --from Alice --to Bob --confirm

# 访客迁移（按 UUID，精确匹配）
mdocs visitor migrate --from OLD_UUID --to NEW_UUID --confirm

# 试运行，查看影响范围但不实际执行
mdocs visitor migrate --from Alice --to Bob --dry-run

# 显式启动服务
mdocs start
```

## 运行时数据

首次启动后，数据目录自动创建在 `~/.mdocs/`：

```
~/.mdocs/
  sqlite/
    data.sqlite       # 元数据（文档索引、权限、访客、审计日志）
  files/
    docs/
      {domain_id}/    # 每个域独立的子目录
        a.md          # 域内文档
        folder/       # 域内子目录（逻辑存在于数据库）
          b.md
    assets/           # 上传的附件
  logs/               # 运行日志
```

文档以 Lexical JSON 格式存储在 `files/docs/` 中，只能由 mdocs 加载编辑。

## 验证

启动后访问 `http://localhost:4000`（npm 安装）或 `http://localhost:5173`（开发模式），看到访客注册弹窗即表示运行成功。

## 小服务器安装（低内存 / 云主机）

1 核 / 1G 内存左右的机器（如轻量阿里云）上，`npm install -g` 很容易被内核 **`Killed`（OOM）**，或因半残目录报 `ENOTEMPTY`。按下面做更稳。

### 1. 加 Swap（强烈建议）

```bash
# 加 2G swap
fallocate -l 2G /swapfile || dd if=/dev/zero of=/swapfile bs=1M count=2048
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
free -h
```

确认 `Swap` 一行不再是 `0B`。重启后若要长期保留，把 `/swapfile swap swap defaults 0 0` 写入 `/etc/fstab`。

### 2. 清掉半残的全局目录

上次安装被 `Killed` 或报 `ENOTEMPTY` 时必做：

```bash
rm -rf /usr/lib/node_modules/@fgbg
npm cache clean --force
```

### 3. 限制内存与并发后再装

优先走官方 registry（国内镜像可能尚未同步新版本）：

```bash
NODE_OPTIONS="--max-old-space-size=512" npm install -g @fgbg/mdocs@latest \
  --registry=https://registry.npmjs.org/ \
  --legacy-peer-deps \
  --no-audit \
  --no-fund \
  --maxsockets=1
```

不要用 `npm install -g ... -force`：peer 警告可忽略，`-force` 只会更吃内存。

### 4. 离线 tgz（网络差时）

在网络较好的机器上打包，再拷到服务器：

```bash
# 本机
npm pack @fgbg/mdocs@latest --registry=https://registry.npmjs.org/
# 得到 fgbg-mdocs-x.y.z.tgz，scp 到服务器后：
NODE_OPTIONS="--max-old-space-size=512" npm install -g ./fgbg-mdocs-*.tgz \
  --legacy-peer-deps \
  --no-audit \
  --no-fund \
  --maxsockets=1
```

### 5. 备选：不装全局，本地 + 软链

全局仍 OOM 时，可装到当前目录再链出命令：

```bash
cd /root   # 或任意工作目录
NODE_OPTIONS="--max-old-space-size=512" npm install ./fgbg-mdocs-*.tgz \
  --legacy-peer-deps --no-audit --no-fund --maxsockets=1
ln -sf "$(pwd)/node_modules/.bin/mdocs" /usr/local/bin/mdocs
mdocs --help
```

若出现 `Cannot find module '.../typebox/build/index.mjs'`，补装依赖即可：

```bash
npm install typebox@1.1.38 --no-audit --no-fund
```

### 常见报错

| 现象 | 原因 | 处理 |
|------|------|------|
| 安装过程 `Killed` | OOM | 加 Swap，限制 `--maxsockets=1` |
| `ENOTEMPTY` rename `@fgbg/mdocs` | 上次半残目录 | `rm -rf /usr/lib/node_modules/@fgbg` 后重装 |
| `ETARGET` / No matching version | 镜像未同步 | `--registry=https://registry.npmjs.org/` 或改用 tgz |
| `mdocs: command not found` | 用了非 `-g` 安装 | 用全局安装，或软链 `node_modules/.bin/mdocs` |

## 升级

### 推荐：`mdocs update`（原地升级）

已全局安装时，直接：

```bash
mdocs update
```

该命令写死从淘宝镜像 [`https://registry.npmmirror.com`](https://registry.npmmirror.com) 拉取最新 `@fgbg/mdocs`，**保留现有 `node_modules`**，再用 `npm install --prefer-offline` 只补差量依赖（本地缓存里已有的包不会再下一遍）。升级后重启服务即可。

### 备选：重新全局安装

```bash
npm install -g @fgbg/mdocs@latest --registry=https://registry.npmjs.org/
```

小服务器若遇半残目录或 OOM，仍按上面「清半残目录 + 限制并发」步骤执行。

## 下一步

了解 [核心设计理念](../core-concepts/domain.md)，或直接[创建第一个文档](./first-kb.md)。
