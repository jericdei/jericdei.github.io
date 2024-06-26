import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import Lara from './primevue/Lara'
import Tooltip from 'primevue/tooltip'

export default (app: App) => {
    app.component('router-link', {
        props: ['to', 'custom'],
        template: `
            <a :href="to">
            <slot />
            </a>`,
    })
        .use(PrimeVue, { ripple: true, unstyled: true, pt: Lara })
        .directive('tooltip', Tooltip)
}
