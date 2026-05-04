import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'docs',
  base: process.env.BASE_URL || '/',
  lang: 'zh-CN',
  title: 'mdocs-site',
  description: '开源 Markdown 知识库 · 纯私有化 · 无账户协作',
  icon: '/favicon.svg',
  logo: '/favicon.svg',
  logoText: 'mdocs',
  themeConfig: {
    darkMode: false,
    nav: [
      { text: '首页', link: '/' },
      { text: '特性', link: '/#features' },
      { text: '开始', link: '/#cta' },
      { text: '文档', link: '/docs/' },
      {
        text: 'GitHub',
        link: 'https://github.com/xuhuafeifei/mdocs',
      },
    ],
    sidebar: {
      '/docs/': [
        {
          text: '快速开始',
          items: [
            { text: '安装', link: '/docs/getting-started/installation' },
            {
              text: '第一个知识库',
              link: '/docs/getting-started/first-kb',
            },
          ],
        },
        {
          text: '核心概念',
          items: [
            { text: '所见皆文件', link: '/docs/core-concepts/all-files' },
            { text: '域隔离', link: '/docs/core-concepts/domain' },
            { text: '文档级邀请', link: '/docs/core-concepts/invitation' },
            {
              text: '无账户身份识别',
              link: '/docs/core-concepts/no-account',
            },
          ],
        },
        {
          text: '使用指南',
          items: [
            { text: 'Markdown 编辑', link: '/docs/usage/markdown' },
            { text: '流程图生成', link: '/docs/usage/flowchart' },
            { text: '草稿与同步', link: '/docs/usage/drafts' },
            {
              text: '受限域成员与模板',
              link: '/docs/usage/domain-members',
            },
          ],
        },
        {
          text: '部署与配置',
          items: [
            { text: '环境要求', link: '/docs/deployment/requirements' },
            { text: '配置文件', link: '/docs/deployment/config' },
            {
              text: '反向代理示例',
              link: '/docs/deployment/reverse-proxy',
            },
          ],
        },
        { text: 'FAQ', link: '/docs/faq' },
        { text: '更新日志', link: '/docs/changelog' },
      ],
    },
  },
});
