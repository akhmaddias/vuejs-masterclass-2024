<script setup lang="ts">
const sheetOpen = defineModel<boolean>()

defineEmits(['commit'])
</script>

<template>
  <Sheet v-model:open="sheetOpen">
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create New Task</SheetTitle>
      </SheetHeader>
      <p>Content</p>
    </SheetContent>
  </Sheet>
</template>
