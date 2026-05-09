# 无账户身份识别

## 设计意图

不做用户系统，不设注册流程。每个访问者通过浏览器获得一个身份令牌，以此识别身份。目标是零上手成本——打开就能用。

## 身份模型

```
访客注册
   │
   ├─ 服务器生成 UUID（visitor_id）
   ├─ 生成高熵令牌（visitor_token，32 字节随机数 → base64url）
   ├─ 服务器只存储 SHA-256(令牌)
   └─ 通过 HttpOnly Cookie 将原始令牌下发给浏览器
       
后续请求
   └─ 浏览器自动携带 Cookie
       └─ 服务器从 Cookie 读取令牌，验证 SHA-256 匹配 → 识别访客
```

前端**不存储任何认证令牌**，所有认证凭据由 HttpOnly Cookie 管理，XSS 无法窃取。

## 为什么这样做

- **无密码，无泄露风险**：服务器从不存储原始令牌，数据库被拖也无法冒充访客
- **无需邮箱**：不要求用户提供任何个人信息
- **浏览器即身份**：换设备 = 新访客（但提供了访客迁移机制）

## 访客迁移

如果浏览器缓存被清除，用户会获得一个新访客 ID。服务部署者可以通过 CLI 命令, 登录部署服务器将旧身份合并到新身份：

```
# 推荐：按访客名称迁移（更简单，名称可在侧边栏看到）
pnpm mdocs visitor migrate --from Alice --to Bob --confirm

# 也支持按 UUID 迁移（精确匹配）
pnpm mdocs visitor migrate --from OLD_ID --to NEW_ID --confirm

# 试运行，查看影响范围但不实际执行
pnpm mdocs visitor migrate --from Alice --to Bob --dry-run
```

该操作在事务内执行，更新文档所有权，禁用旧访客，并记录审计日志。

### 查看所有访客

```
pnpm mdocs visitor list           # 默认只看启用的访客
pnpm mdocs visitor list --all     # 看全部（含已禁用的）
```

## 设计取舍

- **放弃「用户」概念**换来极低的准入门槛，代价是没有密码找回、没有多设备同步——这正是小团队知识库可以接受的权衡
- **HttpOnly Cookie 认证**：前端不存储任何令牌，XSS 无法窃取，服务端重启不丢登录状态
- **可以匿名浏览**：不注册也能看到公开域的公开文档
