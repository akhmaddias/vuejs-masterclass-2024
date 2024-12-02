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
      <FormKit type="text" />
    </SheetContent>
  </Sheet>
</template>
