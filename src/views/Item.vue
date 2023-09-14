<template>
  <section class="p-2 bg-secondary">
    <!-- Loading -->
    <loading v-if="isLoading"></loading>
    <table v-else>
      <tbody>
        <story-title :story="item"></story-title>

        <story-sub-info :story="item"></story-sub-info>
      </tbody>
    </table>

    <table class="comment-table mt-8 text-xs">
      <tbody>
        <template v-for="(comment) in item.children" :key="comment.id">
          <comment-item :comment="comment"></comment-item>
        </template>
      </tbody>
    </table>

  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import StoryTitle from '@/components/stories/StoryTitle.vue';
import StorySubInfo from '@/components/stories/StorySubInfo.vue';
import CommentItem from '@/components/item/CommentItem.vue';
import Loading from '@/components/loading/Loading.vue';

export default defineComponent({
  name: 'Item',
  components: {
    StoryTitle,
    StorySubInfo,
    CommentItem,
    Loading
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const itemId = ref(route.params.id);
    const isLoading = ref(true);

    onMounted(async () => {   
      await store.dispatch('item/fetchItem', itemId.value );
      isLoading.value = false;
    });

    const item = computed(() => store.getters['item/getPageItem']);
    
    return {
      item,
      isLoading
    };
  },
});
</script>
