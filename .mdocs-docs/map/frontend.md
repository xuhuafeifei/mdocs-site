# map — frontend（站点壳）

### 首页 Hero / 卖点标签

- **关键词**：`Hero` `tag` `HERO_TAGS` `立即体验` `Demo`
- **定位**：
  | 路径 | 符号 | 行号（可选） |
  |------|------|----------------|
  | `src/selling-points.ts` | `HERO_TAGS` `SELLING_POINTS` | |
  | `src/constants.ts` | re-export | |
  | `src/components/Hero.tsx` | `Hero` | |

### 特性区块

- **关键词**：`FeatureSection` `为什么选择` `上手助手` `Agent 开发闭环`
- **定位**：
  | 路径 | 符号 |
  |------|------|
  | `src/components/FeatureSection.tsx` | `modules` `FeatureSection` |
  | `src/components/WhyMdocsPage.tsx` | `WhyMdocsPage` |

### 主题 / 布局

- **关键词**：`HomeLayout` `Layout` `Footer`
- **定位**：
  | 路径 | 符号 |
  |------|------|
  | `theme/HomeLayout.tsx` | `HomeLayout` |
  | `theme/Layout.tsx` | `Layout` `Footer` |
  | `theme/styles.css` | `--mdocs-font-sans` 等主题变量 |
  | `rspress.config.ts` | `nav` `sidebar` |

### CTA / Social

- **关键词**：`CTA` `SocialProof` `shields`
- **定位**：
  | 路径 | 符号 |
  |------|------|
  | `src/components/CTA.tsx` | `CTA` |
  | `src/components/SocialProof.tsx` | `SocialProof` |
