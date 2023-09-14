<template>
  <p>Loading...</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loading',
  props: {
    isLoading: {
      type: Boolean,
    },
  },
});
</script>