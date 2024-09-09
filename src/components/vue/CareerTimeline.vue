<script setup lang="ts">
import type { CollectionEntry } from 'astro:content'
import Timeline from 'primevue/timeline'
import TechnologyTag from './TechnologyTag.vue'

type Career = CollectionEntry<'careers'>
type Technology = CollectionEntry<'technologies'>

const props = defineProps<{
    careers: Career[]
    technologies: Technology[]
}>()

const getTechnology = (id: string) =>
    props.technologies.find((x) => x.id === id) as Technology
</script>

<template>
    <Timeline :value="careers" align="left" :pt="{ opposite: '!hidden' }">
        <template #content="{ item: { data: item } }: { item: Career }">
            <div class="mb-16 space-y-4 text-justify">
                <small
                    >{{
                        item.date_from
                            ? item.date_from.toLocaleDateString() + ' to'
                            : ''
                    }}
                    {{ item.date_to?.toLocaleDateString() ?? 'Present' }}</small
                >

                <p class="text-left text-xl font-semibold">
                    {{ item.position }} @ {{ item.company }}
                </p>

                <p>{{ item.description }}</p>

                <div v-if="item.technologies">
                    <p>I learned & used these technologies:</p>

                    <div class="max-w-2/3 mt-4 flex flex-wrap gap-2">
                        <TechnologyTag
                            v-for="tech in item.technologies"
                            :key="tech.id"
                            :technology="getTechnology(tech.id)"
                        />
                    </div>
                </div>
            </div>
        </template>
    </Timeline>
</template>
