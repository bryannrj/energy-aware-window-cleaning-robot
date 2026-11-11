
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Energy-Aware Window Cleaning Robot',

  description:
    'Energy-efficient coverage path planning and control for a low-cost window cleaning robot',

  base: '/energy-aware-window-cleaning-robot/',

  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Research', link: '/research/' },
      { text: 'Robot Design', link: '/design/' },
      { text: 'Software', link: '/software/energy-model' },
      { text: 'Results', link: '/results/' },
      { text: 'Development', link: '/development/' }
    ],

    sidebar: {
      '/research/': [
        {
          text: 'Research',
          items: [
            { text: 'Overview', link: '/research/' },
            { text: 'Methodology', link: '/research/methodology' }
          ]
        }
      ],

      '/design/': [
        {
          text: 'Robot Design',
          items: [
            { text: 'Overview', link: '/design/' },
            { text: 'Mechanical', link: '/design/mechanical' },
            { text: 'Electrical', link: '/design/electrical' },
            { text: 'Suction System', link: '/design/suction' }
          ]
        }
      ],

      '/software/': [
        {
          text: 'Software',
          items: [
            { text: 'Energy Model', link: '/software/energy-model' },
            { text: 'CPP Algorithms', link: '/software/cpp' },
            { text: 'Simulation', link: '/software/simulation' }
          ]
        }
      ]
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/bryannrj/energy-aware-window-cleaning-robot'
      }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'ME4101A Final Year Project',
      copyright: 'Energy-Aware Window Cleaning Robot'
    }
  }
})
