<script setup lang="ts">
const value = defineModel<'in-progress' | 'completed'>()

const emit = defineEmits(['commit'])

const { readonly = false } = defineProps<{
  readonly?: boolean
}>()

const toggleValue = () => {
  if (readonly) return

  value.value = value.value === 'completed' ? 'in-progress' : 'completed'
  emit('commit')
}
</script>

<template>
  <div class="text-2xl cursor-pointer" @click="toggleValue">
    <Transition name="scale" mode="out-in">
      <iconify-icon
        v-if="value === 'completed'"
        class="text-green-500"
        icon="lucide:circle-check"
      />
      <iconify-icon v-else class="text-gray-500" icon="lucide:circle-dot" />
    </Transition>
  </div>
</template>
