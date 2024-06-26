<script setup lang="ts">
import type { CollectionEntry } from 'astro:content'
import Tag from 'primevue/tag'
import { TransitionGroup, computed, ref } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import TechStackCard from './TechStackCard.vue'

const props = defineProps<{
    technologies: CollectionEntry<'technologies'>[]
}>()

const breakpoints = useBreakpoints(breakpointsTailwind)

const types = Array.from(
    new Set(
        props.technologies
            .flatMap((technology) => technology.data.type)
            .toSorted((a, b) => {
                const x = a.toLowerCase()
                const y = b.toLowerCase()

                if (x === 'main') {
                    return -1
                }

                if (y === 'main') {
                    return 1
                }

                if (x < y) return -1
                if (x > y) return 1

                return 0
            }),
    ),
)

const selected = ref<string | null>(null)

const technologyList = computed(() => {
    let filteredTech = props.technologies

    if (selected.value !== null) {
        filteredTech = filteredTech.filter((technology) =>
            technology.data.type.includes(selected.value as string),
        )
    }

    return filteredTech
        .toSorted((a, b) => b.data.skill - a.data.skill)
        .toSorted((a, b) => b.data.interest - a.data.interest)
})
</script>

<template>
    <div
        class="mt-4 grid gap-4 rounded-lg bg-gray-300 p-4 lg:grid-cols-6 dark:bg-surface-700"
    >
        <div
            class="flex flex-wrap justify-center gap-1 rounded-lg p-4 lg:col-span-1 lg:flex-col lg:justify-between lg:gap-2 dark:bg-surface-900"
        >
            <Tag
                v-for="itm in types"
                :key="itm"
                :value="itm"
                :severity="selected === itm ? 'warning' : 'primary'"
                class="cursor-pointer"
                :pt="{ value: 'text-sm lg:text-lg' }"
                @click="() => (selected = selected === itm ? null : itm)"
            />
        </div>

        <div class="lg:col-span-5">
            <Component
                :is="breakpoints.isSmaller('lg') ? 'div' : TransitionGroup"
                class="flex h-[40rem] flex-wrap items-center justify-center gap-4 overflow-y-auto"
                name="list"
                tag="ul"
            >
                <TechStackCard
                    v-for="technology in technologyList"
                    :key="technology.id"
                    :technology
                />
            </Component>
        </div>
    </div>
</template>
