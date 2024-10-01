<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from 'database/types'

const projects = ref<Tables<'projects'>[] | null>(null)

;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)

  projects.value = data

  console.log('Projects...', projects)
})()
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Project 1</RouterLink>
    {{ projects }}
  </div>
</template>
