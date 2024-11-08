// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  head: [
    [
      'style',
      {
        children: `
          .vp-nav-logo {
            width: 64px;
            height: 64px;
          }
        `,
      },
    ],
  ],
} as any
