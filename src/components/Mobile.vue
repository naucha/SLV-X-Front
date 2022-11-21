<script lang="ts" setup>
type Props = {
  brand: string;
  model: string;
};

const props = defineProps<Props>();
</script>

<template>
  <div>
    <tr>
      <th scope="row">{{ props.brand }}</th>
      <th scope="row">{{ props.model }}</th>
      <th scope="row">{{}}</th>
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
