// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Машинное и глубокое обучение',
  tagline: 'Виктор Владимирович Китов',
  favicon: 'img/favicon.ico',

  url: 'https://deepmachinelearning.ru',
  baseUrl: '/',
  
  organizationName: 'victorkitov',
  projectName: 'content',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          path: 'docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      metadata: [
        {name: 'keywords', content: 'машинное обучение, глубокое обучение, глубокое машинное обучение, анализ данных, machine learning, deep learning, data science обучение, искусственный интеллект, ИИ, машинное обучение книги, машинное обучение курсы, методы прогнозирования'},
      ],     
      navbar: {
        logo: {
          alt: 'site logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'Machine-learning',
            label: 'Машинное обучение',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'Neural-networks',
            label: 'Глубокое обучение',
          },
          {to: 'practice', label: 'Практика', position: 'left'},
          {to: 'docs/abbreviations', label: 'Обозначения', position: 'right'},
          {to: 'license', label: 'Лицензия', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© 2023-25 <a href="https://victorkitov.github.io/">Виктор Китов.</a>  <a href="https://t.me/deepmachinelearningru">Новости проекта.</a>`,
      },
      prism: {
        theme: prismThemes.github,
        defaultLanguage: 'python',
        darkTheme: prismThemes.oneDark,
      },
    }),
    
    plugins: [
      ['docusaurus-plugin-yandex-metrica', {
        counterID: '98444042',
      }],
    ],    
};

export default config;
