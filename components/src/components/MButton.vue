<template>
  <div class="btn">{{ msg }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  msg?: string
}>()
</script>

<style scoped>
.btn {
  margin: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: skyblue;
  /* border: 1px solid darksalmon; */
  cursor: pointer;
  text-align: center;
}
</style>
