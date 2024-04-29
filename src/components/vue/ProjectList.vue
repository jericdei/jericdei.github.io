<script setup lang="ts">
import type { CollectionEntry } from 'astro:content'
import ProjectCard from './ProjectCard.vue'
import { capitalizeFirstLetter, getProjectTypeSeverity } from '@/utils/string'
import Button from 'primevue/button'
import { ref } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const props = defineProps<{
    projects: CollectionEntry<'projects'>[]
    technologies: CollectionEntry<'technologies'>[]
}>()

const types = new Set(props.projects.flatMap((project) => project.data.type))

const projects = ref(props.projects)
const selectedType = ref('')

function getTechnologies(
    project: CollectionEntry<'projects'>,
): CollectionEntry<'technologies'>[] {
    return props.technologies.filter((tech) =>
        project.data.technologies?.flatMap((item) => item.id).includes(tech.id),
    )
}

function filterByType(type: string) {
    if (type === selectedType.value) {
        selectedType.value = ''

        projects.value = props.projects

        return
    }

    selectedType.value = type

    projects.value = props.projects.filter((project) =>
        project.data.type.includes(type),
    )
}
</script>

<template>
    <div>
        <div class="mt-16 flex flex-wrap justify-center gap-4">
            <Button
                v-for="item in types"
                :key="item"
                :label="capitalizeFirstLetter(item)"
                :severity="getProjectTypeSeverity(item)"
                class="w-32"
                :text="item !== selectedType"
                @click="filterByType(item)"
            />
        </div>

        <TransitionGroup
            :name="breakpoints.greaterOrEqual('lg').value ? 'list' : ''"
            tag="ul"
            class="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-12 p-4"
        >
            <ProjectCard
                v-for="project in projects"
                :key="project.id"
                :project="project"
                :technologies="getTechnologies(project)"
            />
        </TransitionGroup>
    </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.list-leave-active {
    position: absolute;
}
</style>
