# 反向代理示例

## Nginx

```nginx
server {
    listen 80;
    server_name docs.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## Caddy

```text
docs.example.com {
    reverse_proxy localhost:3000
}
```

## Traefik

```yaml
http:
  routers:
    mdocs:
      rule: Host(`docs.example.com`)
      service: mdocs
  services:
    mdocs:
      loadBalancer:
        servers:
          - url: http://localhost:3000
```
