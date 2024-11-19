<script setup lang="ts">
import { useCollabs } from '@/composables/collabs'
import { columns } from '@/utils/tableColumns/projectColumns'

usePageStore().pageData.title = 'Projects'

const projectsLoader = useProjectsStore()
const { projects } = storeToRefs(projectsLoader)
const { getProjects } = projectsLoader
const { getGroupedCollabs, groupedCollabs } = useCollabs()

await getProjects()

if (projects.value) await getGroupedCollabs(projects.value)

console.log('Test: ', groupedCollabs.value)
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
