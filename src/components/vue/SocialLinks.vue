<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
    <div
        class="mt-12 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
    >
        <a v-tooltip.top="'Hit me up'" href="mailto:loganjeric25@gmail.com">
            <Button client:load icon="ri-mail-line ri-lg" />
        </a>

        <a
            v-tooltip.top="'Visit my GitHub profile'"
            href="https://github.com/jericdei"
            target="_blank"
        >
            <Button
                client:load
                severity="secondary"
                icon="ri-github-fill ri-lg"
            />
        </a>

        <a
            v-tooltip.top="'View my LinkedIn profile'"
            href="https://linkedin.com/in/jericjunee"
            target="_blank"
        >
            <Button
                client:load
                class="!border-[#0077b5] !bg-[#0077b5] !text-white !outline-[#0077b5] hover:!bg-[#0077b5] hover:!outline-[#0077b5]"
                icon="ri-linkedin-fill ri-lg"
            />
        </a>
    </div>
</template>
