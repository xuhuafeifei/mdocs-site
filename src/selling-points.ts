/** Homepage / why-mdocs shared copy — keep FeatureSection & WhyMdocsPage in sync. */

export const HERO_TAGS = [
  '所见即所得',
  'Markdown inline Diff',
  'Agent 代劳',
  '版本 + 对比',
  'MCP / Skills / CLI',
  'Engram 记忆',
] as const;

/** Empty: Hero 不再展示眉题 */
export const HERO_EYEBROW = '';

/** Main H1 — 专门为 Markdown 设计的 Agent 工作台 */
export const HERO_TITLE = '专门为 Markdown 设计的 Agent 工作台';

export const HERO_TITLE_EN = 'An Agent workbench built for Markdown';

/** Empty: Hero 不要副文 */
export const HERO_SUPPORT = '';

export const FEATURES_HEADING = 'Markdown 能力';

/** Empty: 特性区也不铺长副文 */
export const FEATURES_SUBHEADING = '';

export const CTA_HEADING = '开始用 mdocs';

export const CTA_SUPPORT = '';

export type SellingPointId =
  | 'wysiwyg'
  | 'inline-diff'
  | 'agent-ops'
  | 'versioning'
  | 'pipeline';

export interface SellingPointCopy {
  id: SellingPointId;
  title: string;
  subtitle: string;
  tags: string[];
  tagBg: string;
  tagColor: string;
}

/** 先把 Markdown 能力讲透；图谱 / 协作不进主卖点。 */
export const SELLING_POINTS: SellingPointCopy[] = [
  {
    id: 'wysiwyg',
    title: '所见即所得',
    subtitle:
      '直接编辑渲染后的 Markdown：标题、列表、代码块、图表都在你看见的那一层操作，不必在源码和预览之间来回跳。',
    tags: ['富文本工具栏', '斜杠菜单', 'MD 存储'],
    tagBg: '#e8f5e9',
    tagColor: '#2e7d32',
  },
  {
    id: 'inline-diff',
    title: 'Markdown inline Diff',
    subtitle:
      'Agent 改稿与版本对比都在渲染态 Markdown 上做 inline Diff：按块 Keep / Undo，红绿就在你正在看的文档里，不是 IDE 源码 diff。',
    tags: ['渲染态 Diff', '按块 Keep / Undo', '版本对比'],
    tagBg: '#ede7f6',
    tagColor: '#5e35b1',
  },
  {
    id: 'agent-ops',
    title: 'Agent 代劳',
    subtitle:
      '搜文、建文档、改结构、写作与审阅——产品内能力都可以交给 Agent。可挂 Engram 本机记忆，让跨会话上下文留在你自己的机器上。',
    tags: ['智能助手', '结构操作', 'Engram 记忆'],
    tagBg: '#e3f2fd',
    tagColor: '#1565c0',
  },
  {
    id: 'versioning',
    title: '内置版本 + 预览对比',
    subtitle: '发布即留历史，预览 / 对比旧稿，不必靠 GitHub 回滚。',
    tags: ['版本历史', '预览对比'],
    tagBg: '#fff3e0',
    tagColor: '#e65100',
  },
  {
    id: 'pipeline',
    title: '流水线：MCP + Skills / CLI',
    subtitle:
      '插件流水线可挂 MCP；CLI Token + Skills 让 Cursor / Claude 搜索、读写同一套 Markdown 知识库，和站内 Agent 共用对象。',
    tags: ['MCP', 'Skills', 'CLI Token'],
    tagBg: '#f3e5f5',
    tagColor: '#7b1fa2',
  },
];
