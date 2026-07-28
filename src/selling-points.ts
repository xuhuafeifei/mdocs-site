/** Homepage / why-mdocs shared copy — keep FeatureSection & WhyMdocsPage in sync. */

export const HERO_TAGS = [
  '上手 AI',
  'Agent 开发闭环',
  '私有部署',
  '无账户协作',
  '所见皆文件',
] as const;

export const HERO_EYEBROW = '为个人开发者与小团队打造的 AI 原生知识中枢';

export const HERO_SUPPORT =
  '产品内上手助手 · CLI 接入 Cursor / Claude · 手册即 Agent 知识';

export const FEATURES_HEADING = '为什么选择 mdocs';

export const FEATURES_SUBHEADING =
  'AI 两条路径 + 私有底座 — 给人用，也给 Agent 用。';

export const CTA_HEADING = '别再等待，现在就开始自由书写';

export const CTA_SUPPORT =
  '免费开源 · 上手助手 · Agent Skills · 5 分钟部署 · 无需注册';

export type SellingPointId =
  | 'onboarding-ai'
  | 'agent-dev-loop'
  | 'private-deploy'
  | 'no-account'
  | 'edit-and-draft';

export interface SellingPointCopy {
  id: SellingPointId;
  title: string;
  subtitle: string;
  tags: string[];
  tagBg: string;
  tagColor: string;
}

/** Feature order: AI paths first, foundations after. */
export const SELLING_POINTS: SellingPointCopy[] = [
  {
    id: 'onboarding-ai',
    title: '上手助手（AI）',
    subtitle:
      '产品内浮层答疑：域、草稿、发布、权限怎么用，按需阅读本站手册再回答。明确不代写、不润色、不改正文——只帮你更快上手 mdocs。',
    tags: ['产品向导', '读手册答疑', '不代写'],
    tagBg: '#e8f5e9',
    tagColor: '#2e7d32',
  },
  {
    id: 'agent-dev-loop',
    title: 'Agent 开发闭环',
    subtitle:
      'CLI Token + mdocs-cli Skills：Cursor / Claude 等可搜索、读写知识库；mdocs-dev 把需求与设计落在仓库契约里，diagram 落 Mermaid 图——知识库嵌进开发流程。',
    tags: ['CLI + Skills', 'mdocs-dev', 'Cursor / Claude'],
    tagBg: '#f3e5f5',
    tagColor: '#7b1fa2',
  },
  {
    id: 'private-deploy',
    title: '本地私有 · 零依赖',
    subtitle:
      'SQLite + 本地文件就地承接状态，无需外部数据库、缓存或消息队列。单进程即可运行，数据在你自己的机器上。',
    tags: ['一键启动', '纯私有化'],
    tagBg: '#e8f5e9',
    tagColor: '#2e7d32',
  },
  {
    id: 'no-account',
    title: '无账户协作',
    subtitle:
      '访问者即身份，无需注册登录。通过「域隔离 + 文档级邀请」从完全私有到开放协作，小团队可立即开写。',
    tags: ['无需注册', '精细权限'],
    tagBg: '#e0f2f1',
    tagColor: '#00695c',
  },
  {
    id: 'edit-and-draft',
    title: '双模编辑与智能草稿',
    subtitle:
      'Markdown 语法 + 富文本工具栏，流程图拖拽嵌入；编辑自动落本地草稿，空闲同步服务端，断网也不丢字。',
    tags: ['所见即所得', '自动保存', '离线可用'],
    tagBg: '#fff8e1',
    tagColor: '#ff8f00',
  },
];
