/** Homepage / why-mdocs shared copy — keep FeatureSection & WhyMdocsPage in sync. */

export const HERO_TAGS = [
  '上手 AI · 双模式',
  '知识图谱',
  'Agent 开发闭环',
  '私有部署',
  '无账户协作',
] as const;

export const HERO_EYEBROW = '为个人开发者与小团队打造的 AI 原生知识中枢';

export const HERO_SUPPORT =
  '给人看、也给 Agent 用 · 产品内助手与帮写 · 知识图谱 · CLI 接入 Cursor / Claude';

export const FEATURES_HEADING = '为什么选择 mdocs';

export const FEATURES_SUBHEADING =
  'AI 原生知识库：人建立全局认知，Agent 沿着关系检索 — 数据仍在你自己的机器上。';

export const CTA_HEADING = '别再等待，现在就开始自由书写';

export const CTA_SUPPORT =
  '免费开源 · 上手助手 · 帮写 · 知识图谱 · Agent Skills · 5 分钟部署 · 无需注册';

export type SellingPointId =
  | 'onboarding-ai'
  | 'agent-dev-loop'
  | 'knowledge-graph'
  | 'private-deploy'
  | 'no-account';

export interface SellingPointCopy {
  id: SellingPointId;
  title: string;
  subtitle: string;
  tags: string[];
  tagBg: string;
  tagColor: string;
}

/** Feature order: AI paths + graph first, foundations after. */
export const SELLING_POINTS: SellingPointCopy[] = [
  {
    id: 'onboarding-ai',
    title: 'AI 双模式：智能助手 + 帮写',
    subtitle:
      '智能助手（Ask）答疑、搜文、结构操作，也可全文覆写；帮写（Coding）左聊右 Diff，按段接受后才写回。同一知识库，两种交互强度。',
    tags: ['Ask 答疑', '帮写 Diff', '私人 Skills'],
    tagBg: '#e8f5e9',
    tagColor: '#2e7d32',
  },
  {
    id: 'knowledge-graph',
    title: '知识图谱：看见结构',
    subtitle:
      '从文档自动归纳概念与关系，目录级力导向图可下钻展开。给人一张知识地图，也给 Agent 可沿边扩展的语义索引。',
    tags: ['概念 · 关系', '分层展开', '可追溯来源'],
    tagBg: '#ede7f6',
    tagColor: '#5e35b1',
  },
  {
    id: 'agent-dev-loop',
    title: 'Agent 开发闭环',
    subtitle:
      'CLI Token + mdocs-cli Skills：Cursor / Claude 等可搜索、读写知识库；mdocs-dev 把需求与设计落在仓库契约里，diagram 落 Mermaid 图。',
    tags: ['CLI + Skills', 'mdocs-dev', 'Cursor / Claude'],
    tagBg: '#f3e5f5',
    tagColor: '#7b1fa2',
  },
  {
    id: 'private-deploy',
    title: '本地私有 · 零依赖',
    subtitle:
      'SQLite + 本地 Markdown 文件就地承接状态，无需外部数据库或消息队列。单进程即可运行，数据在你自己的机器上。',
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
];
