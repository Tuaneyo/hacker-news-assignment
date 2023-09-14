<template>
  <section class="py-2 bg-secondary">
    <stories></stories>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Stories from '@/components/stories/Stories.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Stories
  },
});
</script>
