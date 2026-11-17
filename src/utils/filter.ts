/**
 * Wires up chip filters: a `[data-filter-group=X]` containing
 * `button[data-filter]` toggles `hidden` on `[data-filter-list=X] > [data-types]`.
 * A filter value of `*` shows everything; `|` separates multiple types.
 */
export function initFilters() {
    document
        .querySelectorAll<HTMLElement>('[data-filter-group]')
        .forEach((group) => {
            if (group.dataset.bound) return
            group.dataset.bound = '1'

            const name = group.dataset.filterGroup
            const list = document.querySelector<HTMLElement>(
                `[data-filter-list="${name}"]`,
            )
            if (!list) return

            const buttons =
                group.querySelectorAll<HTMLButtonElement>('[data-filter]')
            const items = list.querySelectorAll<HTMLElement>('[data-types]')

            const apply = (value: string) => {
                buttons.forEach((b) =>
                    b.setAttribute(
                        'aria-pressed',
                        String(b.dataset.filter === value),
                    ),
                )
                items.forEach((item) => {
                    const types = item.dataset.types!.split('|')
                    item.hidden = value !== '*' && !types.includes(value)
                })
            }

            buttons.forEach((b) =>
                b.addEventListener('click', () => apply(b.dataset.filter!)),
            )
        })
}
