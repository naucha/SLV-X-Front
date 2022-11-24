<script lang="ts" setup>
import { onMounted } from "vue";
import Mobile from "./Mobile.vue";
import { ref } from "vue";
import { mobileStore } from "../store/mobilesStore";
import { computed } from "@vue/reactivity";
import { IMobileUpdate } from "../types/types";
const mobiles = computed(() => mobileStore.mobileList);

onMounted(async () => {
  mobileStore.get();
});

const handleDelete = (id: number) => {
  mobileStore.delete(id);
};

let idToUpdate = 0;
let brandToUpdate = "";
let modelToUpdate = "";

const handleUpdate = (mobile: IMobileUpdate) => {
  mobileStore.showUpdate = true;
  const { id, brand, model } = mobile;

  idToUpdate = id;
  brandToUpdate = brand;
  modelToUpdate = model;

  updateMobile.value.brand = brandToUpdate;
  updateMobile.value.model = modelToUpdate;

  return { idToUpdate, brandToUpdate, modelToUpdate };
};

const updateMobile = ref({
  id: idToUpdate,
  brand: brandToUpdate,
  model: modelToUpdate,
});

const saveUpdateMobile = () => {
  const updateData = {
    id: idToUpdate,
    brand:
      updateMobile.value.brand === ""
        ? brandToUpdate
        : updateMobile.value.brand,
    model:
      updateMobile.value.model === ""
        ? modelToUpdate
        : updateMobile.value.model,
  };

  mobileStore.update(updateData);
  updateMobile.value = {
    id: 0,
    brand: "",
    model: "",
  };
  mobileStore.showUpdate = false;
};
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
      <Mobile :brand="mobile.brand" :model="mobile.model" :key="mobile.id" />
      <button @click="handleDelete(mobile.id)">Delete</button>
      <button @click="handleUpdate(mobile)">Edit</button>
    </table>
    <form v-if="mobileStore.showUpdate" @submit.prevent="saveUpdateMobile">
      <input
        type="text"
        placeholder="Insert brand"
        v-model="updateMobile.brand"
      />
      <input
        type="text"
        placeholder="Insert model"
        v-model="updateMobile.model"
      />
      <button type="submit">Update MOBILE</button>
    </form>
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
