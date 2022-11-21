<script lang="ts" setup>
import { onMounted } from "vue";
import Mobile from "./Mobile.vue";

import { mobileStore } from "../store/mobilesStore";
import { computed } from "@vue/reactivity";

const mobiles = computed(() => mobileStore.mobileList);

onMounted(async () => {
  mobileStore.get();
});
</script>

<template>
  <h1>Mobiles Table</h1>
  <div>
    <table>
      <tr>
        <th scope="col">Brand</th>
        <th scope="col">Model</th>
        <th scope="col">Rate</th>
      </tr>
    </table>
    <table v-for="mobile in mobiles">
      <Mobile :brand="mobile.brand" :model="mobile.model" />
    </table>
  </div>
</template>

<style lang="css" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
th {
  padding: 6px;
  width: 110px;
  height: 30px;
}
table {
  border: 1px solid rgb(200, 200, 200);
  margin: 6px;
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 0.8rem;
}
</style>
