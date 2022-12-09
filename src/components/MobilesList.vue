<script lang="ts" setup>
import { onMounted } from "vue";
import Mobile from "./Mobile.vue";
import { ref } from "vue";
import { mobileStore } from "../store/mobilesStore";
import { computed } from "@vue/reactivity";
import { IMobileUpdate } from "../types/types";

const mobiles = computed(() => mobileStore.mobileList);

onMounted(async () => {
  await mobileStore.get();
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

const handleDelete = (id: number) => {
  mobileStore.delete(id);
};

let idToUpdate = 0;
let brandToUpdate = "";
let modelToUpdate = "";

const updateMobile = ref({
  id: idToUpdate,
  brand: brandToUpdate,
  model: modelToUpdate,
});

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
</script>

<template>
  <h1>Mobiles Table</h1>
  <table>
    <tr>
      <th scope="col">Brand</th>
      <th scope="col">Model</th>
    </tr>
  </table>
  <div>
    <table v-for="mobile in mobiles">
      <Mobile
        :brand="mobile.brand"
        :model="mobile.model"
        :id="mobile.id"
        :key="mobile.id"
      />

      <button @click="handleDelete(mobile.id)">Delete</button>
      <button @click="handleUpdate(mobile)">Edit</button>
    </table>
  </div>
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
