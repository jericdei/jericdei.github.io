const defaultTheme = require('tailwindcss/defaultTheme')

const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Geist Variable', ...defaultTheme.fontFamily.sans],
                mono: ['Geist Mono Variable', ...defaultTheme.fontFamily.mono],
                serif: ['Instrument Serif', ...defaultTheme.fontFamily.serif],
            },
            colors: {
                bg: token('bg'),
                'bg-elevated': token('bg-elevated'),
                fg: token('fg'),
                muted: token('muted'),
                line: token('line'),
                accent: token('accent'),
                'accent-fg': token('accent-fg'),
                'primary-500': token('accent'),
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '72ch',
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
