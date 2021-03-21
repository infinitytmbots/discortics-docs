const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Discortics Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'yuu',
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    yuu: {
      defaultDarkTheme: true,
      labels: {
        darkTheme: 'Enable Dark theme', // Default is "Enable Dark Theme?"
        ignoreThemes: 'Ignore Other themes', // Default is "Ignore Other Themes?"
      },
    },
    lastUpdated: false,
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'Invite',
        link: 'https://discord.com/api/oauth2/authorize?client_id=739735540483752006&permissions=2081287415&scope=bot'
      },
      {
        text: 'Support Server',
        link: 'https://discord.gg/buHBCtE'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Get Started',
          collapsable: false,
          children: [
            '',
            'home',
          ]
        },
        {
          title: 'Settings',
          collapsable: true,
          children: [
            'settings/antispam',
            'settings/welcome',
            'settings/application',
            'settings/verification',
          ]
        },
        {
          title: 'Configurations',
          collapsable: true,
          children: [
            'configuration/autorole'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}
