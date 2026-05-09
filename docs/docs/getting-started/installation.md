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

# 访客迁移
mdocs visitor migrate --from OLD_UUID --to NEW_UUID --confirm

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

## 下一步

了解 [核心设计理念](../core-concepts/domain.md)，或直接[创建第一个文档](./first-kb.md)。
