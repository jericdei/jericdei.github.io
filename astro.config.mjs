import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
    site: 'https://jericdei.github.io',
    experimental: {
        viewTransitions: true,
    },
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        vue({
            appEntrypoint: '/src/vue',
        }),
    ],
    // vite: {
    //     ssr: {
    //         external: ['primevue'],
    //     },
    // },
})
