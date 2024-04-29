import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import expressiveCode from 'astro-expressive-code'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
    site: 'https://jericdei.github.io',
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        vue({
            appEntrypoint: '/src/vue',
        }),
        icon(),
        expressiveCode(),
        mdx(),
        sitemap(),
        robotsTxt(),
    ],
})
