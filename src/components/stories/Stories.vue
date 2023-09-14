<template>
  <loading v-if="isLoading"></loading>
  <table v-else>
    <tbody>
      <template v-for="(story, index) in stories?.hits" :key="story.objectID">
        
        <story-title :story="story" :storyIndex="calculateStoryIndex(index)"></story-title>

        <story-sub-info :story="story"></story-sub-info>

      </template>

      <tr>
        <td></td>
        <td>
          <button @click="loadMoreStories" class="text-black">More</button>
        </td>
      </tr>

    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import StoryTitle from './StoryTitle.vue';
import StorySubInfo from './StorySubInfo.vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import Loading from '@/components/loading/Loading.vue';

export default defineComponent({
  name: 'Stories',
  components: {
    StoryTitle,
    StorySubInfo,
    Loading,
  },
  setup() {
    const store = useStore();
    const route = useRoute()
    const isLoading = ref(true as boolean);
    const currentPage = ref(parseInt(route.query.page as string, 10) || 0);
    const stories = computed(() => store.getters['stories/getFrontPageStories']);
    const storiesPerPage = ref(0);
    
    onMounted(async () => {         
      await store.dispatch('stories/fetchStoriesByPage', currentPage.value );
      storiesPerPage.value = stories.value.hits.length;
      isLoading.value = false;
    });

    /**
     * Load more stories
     * Update the route with the new page number
     */
    const loadMoreStories = async () => {
      isLoading.value = true;
      currentPage.value++;
      store.dispatch('stories/fetchStoriesByPage', currentPage.value);

      const updatedRoute = { path: '/front', query: { page: currentPage.value } };
      await router.push(updatedRoute);
      isLoading.value = false;
    }

    /**
     * Calculate the story index based on the current page and the index of the story
     */
    const calculateStoryIndex = (index: number) => {
      const startIndex = currentPage.value * storiesPerPage.value;
      return startIndex + index + 1;
    };

    return {
      stories,
      currentPage,
      isLoading,
      loadMoreStories,
      calculateStoryIndex,
    }
  },
});
</script>