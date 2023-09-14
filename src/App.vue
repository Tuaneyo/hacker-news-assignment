<template>
  <div class="container mx-auto">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/header/Header.vue';
export default defineComponent({
  name: 'App',
  components: {
    Header
  },
});
</script>


<style></style>
