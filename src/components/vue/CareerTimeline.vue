<script setup lang="ts">
import Timeline from "primevue/timeline"
import { ref } from "vue";

type Event = {
  date: Date
  position: string
  company: string
}

const events = ref<Event[]>([
  {
    date: new Date('2022-08-23'),
    position: 'Web Developer',
    company: 'Prime Outsourcing'
  },
  {
    date: new Date('2023-01-16'),
    position: 'Junior Full Stack Developer',
    company: 'Lhoopa'
  },
  {
    date: new Date('2023-04-08'),
    position: 'Mid-level Full Stack Developer',
    company: 'Lhoopa'
  },
  {
    date: new Date('2024-07-15'),
    position: 'Frontend Engineer',
    company: 'Evelan'
  },
])
</script>

<template>
  <Timeline :value="events">
    <template #content="{ item }: {item: Event}">
      <small>{{ item.date.toLocaleDateString() }}</small>
      <p>{{ item.position }} @ {{ item.company }}</p>
    </template>
  </Timeline>
</template>
