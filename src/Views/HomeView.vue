<script lang="ts" setup>
import MobilesList from "../components/MobilesList.vue";
import FormAddMobile from "../components/FormAddMobile.vue";
import TableRating from "../components/TableRating.vue";
</script>

<template>
  <div>
    <MobilesList />
    <FormAddMobile />
    <TableRating />
  </div>
</template>

<style lang="css" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
