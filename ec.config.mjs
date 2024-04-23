import { defineEcConfig } from 'astro-expressive-code'
import { ExpressiveCodeTheme } from 'astro-expressive-code'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

const jsoncString = fs.readFileSync(
    new URL(`./src/themes/andromeda.jsonc`, import.meta.url),
    'utf-8',
)
const andromeda = ExpressiveCodeTheme.fromJSONString(jsoncString)

export default defineEcConfig({
    plugins: [pluginLineNumbers()],
    themes: [andromeda],
    styleOverrides: {
        codeFontFamily: 'Fira Code Variable',
        codeFontSize: '1rem',
    },
    defaultProps: {
        showLineNumbers: false,
    },
})
