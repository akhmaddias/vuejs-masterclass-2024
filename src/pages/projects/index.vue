<script setup lang="ts">
import { useCollabs } from '@/composables/collabs'
import { columns } from '@/utils/tableColumns/projectColumns'

usePageStore().pageData.title = 'Projects'

const projectsLoader = useProjectsStore()
const { projects } = storeToRefs(projectsLoader)
const { getProjects } = projectsLoader
const { getProfilesByIds } = useCollabs()

await getProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
