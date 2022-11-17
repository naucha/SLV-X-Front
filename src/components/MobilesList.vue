<template>
  <h1>Hola</h1>
  <ul v-for="mobile in mobiles">
    <li>
      <span>{{ mobile["brand"] }} </span>

      <span>{{ mobile["model"] }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "MobilesList",
  data() {
    return {
      mobiles: [],
    };
  },

  methods: {
    async getMobiles() {
      let url = `${import.meta.env.VITE_API_URL}`;
      let response = await axios.get(`${url}api/mobiles`);
      this.mobiles = response.data;
    },
  },

  created() {
    this.getMobiles();
  },
};
</script>
