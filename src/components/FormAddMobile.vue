<script lang="ts" setup>
import { ref } from "vue";
import { mobileStore } from "../store/mobilesStore";
import { IMobileRequest } from "../types/types";

const newMobile = ref<IMobileRequest>({ model: "", brand: "" });

const saveNewMobile = () => {
  const mobile = {
    model: newMobile.value.model,
    brand: newMobile.value.brand,
  };

  if (mobile.brand !== "" && mobile.model !== "") {
    mobileStore.add(mobile);
    newMobile.value = { model: "", brand: "" };
  } else {
    console.log("nothing to create");
  }

  return null;
};
</script>

<template>
  <form @submit.prevent="saveNewMobile">
    <input type="text" placeholder="Insert brand" v-model="newMobile.brand" />
    <input type="text" placeholder="Insert model" v-model="newMobile.model" />
    <button type="submit">✚ ADD MOBILE</button>
  </form>
</template>

<style lang="css" scoped>
form {
  width: 250px;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
