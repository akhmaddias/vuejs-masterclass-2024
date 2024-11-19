<script setup lang="ts">
const value = defineModel<'in-progress' | 'completed'>()

defineEmits(['commit'])
</script>

<template>
  <div class="text-2xl cursor-pointer">
    <iconify-icon v-if="value === 'completed'" class="text-green-500" icon="lucide:circle-check" />
    <iconify-icon v-else class="text-gray-500" icon="lucide:circle-dot" />
  </div>
</template>
