# 反向代理配置

生产部署时，推荐将 mdocs 放在反向代理之后，由代理层处理 TLS 证书、域名绑定、日志等。

## Nginx

```nginx
server {
    listen 443 ssl;
    server_name docs.yourdomain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://127.0.0.1:4000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket 支持（如果需要）
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

> 注意：如果 mdocs 运行在 `127.0.0.1`，记得将 `MDOCS_HOST` 设为 `0.0.0.0` 或去掉限制，否则反向代理无法访问。

## Caddy

```
docs.yourdomain.com {
    reverse_proxy localhost:4000
}
```

## Docker Compose

```yaml
services:
  mdocs:
    build: .
    ports:
      - "127.0.0.1:4000:4000"
    environment:
      - MDOCS_DATA_DIR=/data
    volumes:
      - mdocs-data:/data

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - mdocs
```
