/**
 * Expandable text blocks. Markup:
 *   <div class="expand-host" [data-expand-tap]>
 *     <p class="expandable">…</p>
 *     [<button class="expand-toggle" aria-expanded="false"><span>Show more</span><i/></button>]
 *   </div>
 *
 * - Measures the text's real height into `--full` so CSS can animate max-height to it.
 * - Touch devices: the toggle button (or a tap on a `data-expand-tap` host) toggles `.is-open`.
 * - The toggle hides itself when the text already fits.
 */
const finePointer = () => matchMedia('(hover: hover) and (pointer: fine)').matches

export function initExpanders() {
    document.querySelectorAll<HTMLElement>('.expand-host').forEach((host) => {
        if (host.dataset.expandBound) return
        host.dataset.expandBound = '1'

        const text = host.querySelector<HTMLElement>('.expandable')
        if (!text) return

        const measure = () =>
            text.style.setProperty('--full', `${text.scrollHeight}px`)
        host.addEventListener('pointerenter', measure)
        host.addEventListener('focusin', measure)

        const btn = host.querySelector<HTMLButtonElement>('.expand-toggle')
        const label = btn?.querySelector('span')

        const setOpen = (open: boolean) => {
            measure()
            host.classList.toggle('is-open', open)
            btn?.setAttribute('aria-expanded', String(open))
            if (label) label.textContent = open ? 'Show less' : 'Show more'
        }

        // Flag text that already fits so it gets no fade and no toggle
        const sync = () => {
            if (host.classList.contains('is-open')) return
            const fits = text.scrollHeight <= text.clientHeight + 1
            text.toggleAttribute('data-fits', fits)
            if (btn) btn.hidden = fits
        }
        new ResizeObserver(sync).observe(text)
        sync()

        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                setOpen(!host.classList.contains('is-open'))
            })
        }

        if (host.hasAttribute('data-expand-tap')) {
            host.addEventListener('click', () => {
                if (!finePointer()) setOpen(!host.classList.contains('is-open'))
            })
            host.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setOpen(!host.classList.contains('is-open'))
                }
            })
        }
    })
}
