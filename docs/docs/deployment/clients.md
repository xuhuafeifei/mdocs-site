# 客户端壳（Android / 桌面）

mdocs 本体是网页应用，用浏览器访问即可。如果你想要一个**独立的应用图标 / 窗口** —— 手机上像原生 App 一样打开、桌面上不占浏览器标签 —— 可以用仓库里提供的两个**套壳客户端**。

两个壳做的事完全一样：**内置一个 WebView，加载你自部署的 mdocs 服务器地址**。

| | Android | 桌面 |
|--|---------|------|
| 平台 | Android 手机 / 平板 | macOS、Windows |
| 内核 | Android WebView | WKWebView（macOS）/ WebView2（Windows） |
| 分发 | 侧载 APK（不上架商店） | 自行构建（不发布安装包） |
| 服务器 | 首次打开自填 | 首次打开自填 |

两者都**不参与** `pnpm build`，也**不在** npm 包内（`@fgbg/mdocs` 的 `files` 不含 `android/` `desktop/`）。改壳只影响壳。

> **壳只是容器，功能全部来自服务器。** 升级 mdocs 服务端后，壳**不需要**重新构建。

## 共同点：填服务器地址

首次打开会要求填写你的 mdocs 地址，例如：

- 局域网：`192.168.1.8:4000`
- 公网 + 域名：`https://mdocs.example.com`

> ⚠️ **不要在另一台设备上填 `127.0.0.1`。** 那指的是「这台设备自己」。手机或另一台电脑上必须填服务器的**真实可达地址**。

前提是该设备能访问到那台服务器（同一 Wi-Fi、VPN 或公网）。公网部署建议配 HTTPS，见[反向代理示例](./reverse-proxy.md)。

### 刷新与更换服务器

- **刷新**：用页面内的「拉取更新」；桌面版菜单里也有「刷新」
- **更换服务器**：Android 长按桌面图标 →「更换服务器」；桌面版菜单 →「更换服务器」

### 从浏览器跳回壳

复制文档链接（形如 `…/#/doc/<id>`）后切回壳，会直接打开该文档。

---

## Android

### 环境

只装**最小 SDK**（约 500 MB），**不需要** Android Studio，也**不需要**模拟器：

- JDK 17
- Android SDK：`cmdline-tools`、`platform-tools`、`platforms;android-34`、`build-tools;34.0.0`

### 构建

```bash
cd android
./gradlew assembleDebug
```

产物：`android/app/build/outputs/apk/debug/app-debug.apk`

把 APK 拷到手机安装，首次需允许「未知来源」。

`assembleRelease` 使用 debug 签名，同样可侧载。

---

## 桌面

一套源码同时出 macOS 和 Windows。

### 环境

- **Rust**：`rustup`（建议 `--profile minimal`）。新终端找不到 `cargo` 时先 `source "$HOME/.cargo/env"`
- **Node**：在本目录单独 `npm install`，不碰仓库根的 `pnpm-lock.yaml`
- **macOS**：有 Command Line Tools 即可，不必装完整 Xcode
- **Windows**：MSVC 构建工具 + 系统 WebView2（Win10/11 通常自带）

### 构建（macOS）

在 `desktop/` 目录：

```bash
npm install
npx tauri build --bundles app
```

产物：

- `src-tauri/target/release/bundle/macos/mdocs.app`
- 若启用 dmg：`src-tauri/target/release/bundle/dmg/mdocs_*.dmg`

把 `.app` 拖进「应用程序」。首次可能提示未签名，去「系统设置 → 隐私与安全性」允许。

### 构建（Windows）

必须在 **Windows 电脑**上构建（WebView2 安装包无法从 macOS 交叉编译）：

```bash
npm install
npm run tauri build
```

产物：`src-tauri/target/release/bundle/nsis/mdocs_*-setup.exe`

---

## 要不要用壳？

| 你的情况 | 建议 |
|---------|------|
| 只是用 mdocs | 浏览器访问即可，**不需要**壳 |
| 想要手机主屏图标 / 桌面独立窗口 | 按上面构建对应平台 |
| 想改壳的界面或行为 | 只动 `android/` 或 `desktop/`，与主工程解耦 |
