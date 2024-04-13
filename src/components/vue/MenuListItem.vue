<script setup lang="ts">
const props = defineProps<{
    label?: string
}>()
</script>

<template>
    <a
        class="w-full hover:bg-gray-600 hover:text-slate-200 py-2 cursor-pointer transition-all rounded-xl"
        v-bind="$attrs"
    >
        <slot>
            <span>{{ props.label }}</span>
        </slot>
    </a>
</template>
