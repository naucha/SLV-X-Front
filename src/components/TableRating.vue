<script lang="ts" setup>
import { computed } from "@vue/reactivity";

import { mobileStore } from "../store/mobilesStore";
import Mobile from "./Mobile.vue";

const mobiles = computed(() => mobileStore.mobileList);
</script>

<template>
  <h2>Table with number of ratings</h2>
  <table>
    <tr>
      <th scope="col">Brand</th>
      <th scope="col">Model</th>
      <th scope="col">Rates</th>
    </tr>
  </table>
  <div v-for="(mobile, index) in mobiles">
    <Mobile
      :brand="mobile.brand"
      :model="mobile.model"
      :id="mobile.id"
      :rate="index"
      :key="mobile.id"
    />
  </div>
</template>

<style lang="css" scoped>
table {
  margin-top: 10px;
  width: 400px;
  height: 40px;
  border: 1px solid white;
}
</style>
