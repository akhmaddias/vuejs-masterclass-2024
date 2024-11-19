<script setup lang="ts">
const value = defineModel<'in-progress' | 'completed'>()

const emit = defineEmits(['commit'])

const toggleValue = () => {
  value.value = value.value === 'completed' ? 'in-progress' : 'completed'
  emit('commit')
}
</script>

<template>
  <div class="text-2xl cursor-pointer" @click="toggleValue">
    <iconify-icon v-if="value === 'completed'" class="text-green-500" icon="lucide:circle-check" />
    <iconify-icon v-else class="text-gray-500" icon="lucide:circle-dot" />
  </div>
</template>
