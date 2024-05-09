<script setup lang="ts">
function scrollToTechStack() {
    document
        .getElementById('tech-stack')
        ?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <i
        class="ri-arrow-down-double-line ri-4x transform animate-bounce cursor-pointer transition-transform"
        @click="scrollToTechStack"
    ></i>
</template>
