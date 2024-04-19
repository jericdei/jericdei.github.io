import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import icon from 'astro-icon'
import expressiveCode, { ExpressiveCodeTheme } from 'astro-expressive-code'

import mdx from '@astrojs/mdx'

const jsoncString = fs.readFileSync(
    new URL(`./src/themes/andromeda.jsonc`, import.meta.url),
    'utf-8',
)
const andromeda = ExpressiveCodeTheme.fromJSONString(jsoncString)

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
        expressiveCode({
            themes: [andromeda],
            styleOverrides: {
                codeFontFamily: 'Fira Code Variable',
                codeFontSize: '18px',
            },
        }),
        mdx(),
    ],
})
