<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'
useErrorStore().setError({ error: 'Page not found', customCode: 404 })
</script>

<script setup lang="ts"></script>

<template>
  <div></div>
</template>
