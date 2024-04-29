<script setup lang="ts">
import { capitalizeFirstLetter, getProjectTypeSeverity } from '@/utils/string'
import type { CollectionEntry } from 'astro:content'
import TechnologyTag from './TechnologyTag.vue'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

defineProps<{
    project: CollectionEntry<'projects'>
    technologies: CollectionEntry<'technologies'>[]
}>()
</script>

<template>
    <div class="group relative max-w-[25rem]">
        <div
            class="pointer-events-none absolute bottom-[103%] right-0 rounded-lg bg-surface-0/90 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-surface-900/90"
        >
            <p class="text-slate-800 dark:text-slate-300">
                {{ project.data.description }}
            </p>
        </div>

        <div
            class="rounded-lg bg-slate-300 p-4 transition-all dark:bg-surface-700"
        >
            <div class="flex items-center justify-between">
                <p class="font-bold lg:text-lg">
                    {{ project.data.name }}
                </p>

                <Tag
                    :value="capitalizeFirstLetter(project.data.type)"
                    :severity="getProjectTypeSeverity(project.data.type)"
                />
            </div>

            <div class="mt-4 flex flex-wrap gap-2">
                <div v-for="technology in technologies" :key="technology.id">
                    <TechnologyTag :technology />
                </div>
            </div>

            <div class="mt-4">
                <img
                    :src="String(project.data.image)"
                    :alt="project.data.name"
                    :height="300"
                    :width="600"
                    class="flex items-center justify-center rounded-lg bg-slate-400 dark:bg-slate-600"
                    onerror="this.src='/placeholder.svg'"
                />
            </div>

            <div class="mt-4">
                <div>
                    <span>Progress: </span>

                    <ProgressBar
                        v-if="project.data.progress"
                        :value="project.data.progress"
                    />

                    <ProgressBar v-else client:load mode="indeterminate" />
                </div>
            </div>

            <div class="mt-8 flex flex-wrap items-center gap-2">
                <a :href="String(project.data.repo_url)" target="_blank">
                    <Button
                        client:only="vue"
                        severity="secondary"
                        :label="project.data.repo_url ? 'Repository' : 'N/A'"
                        :icon="project.data.repo_url ? 'ri-github-fill' : ''"
                        size="small"
                        :disabled="!project.data.repo_url"
                    />
                </a>

                <a :href="String(project.data.live_url)" target="_blank">
                    <Button
                        :label="project.data.live_url ? 'Link' : 'N/A'"
                        :icon="
                            project.data.live_url ? 'ri-external-link-line' : ''
                        "
                        size="small"
                        :disabled="!project.data.live_url"
                    />
                </a>
            </div>
        </div>
    </div>
</template>
