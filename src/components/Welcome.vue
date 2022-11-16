<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2 class="heading__section">Tables</h2>
</template>

<style scoped>
.heading__section {
  color: #888;
}
</style>
