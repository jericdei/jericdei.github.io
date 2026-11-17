import fs from 'node:fs'
import path from 'node:path'
import { defineEcConfig } from 'astro-expressive-code'
import { ExpressiveCodeTheme } from 'astro-expressive-code'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

const jsoncString = fs.readFileSync(
    path.resolve(process.cwd(), 'src/themes/andromeda.jsonc'),
    'utf-8',
)
const andromeda = ExpressiveCodeTheme.fromJSONString(jsoncString)

export default defineEcConfig({
    plugins: [pluginLineNumbers()],
    themes: [andromeda],
    styleOverrides: {
        codeFontFamily: 'Geist Mono Variable',
        codeFontSize: '0.9rem',
        borderRadius: '1rem',
    },
    defaultProps: {
        showLineNumbers: false,
    },
})
