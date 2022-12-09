<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { mobileStore } from "../store/mobilesStore";

type Props = {
  brand: string;
  model: string;
  rate?: number;
  id: number;
};

const props = defineProps<Props>();
const rates: any = computed(() => mobileStore.ratesList);
</script>

<template>
  <div v-if="props.rate !== undefined">
    <tr>
      <th scope="row">{{ props.brand }}</th>
      <th scope="row">{{ props.model }}</th>
      <th scope="row">Nº Rates: {{ rates[props.rate] }}</th>
    </tr>
  </div>

  <div v-else>
    <tr>
      <th scope="row">{{ props.brand }}</th>
      <th scope="row">{{ props.model }}</th>
    </tr>
  </div>
</template>

<style lang="css" scoped>
th {
  padding: 6px;
  width: 110px;
  height: 30px;
}
</style>
