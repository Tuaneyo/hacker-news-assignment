<template>
  <tr>
    <td>
    </td>
    <td>
      <div class="flex gap-x-1 text-xs mb-1">
        <span>{{ story.points }} points</span>
        <span> by {{ story.author }} </span> 
        <span> {{ showPublishedTime(story.created_at_i) }} </span>
        <template v-if="story.num_comments">
          <span>|</span>
          <router-link :to="`/item/${story.objectID}`" class="hover:underline">
            {{ story.num_comments }} comments
          </router-link>
        </template>
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import { convertToTimesAgo } from '@/utils/convertToTimesAgo';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'StorySubInfo',
  props: {
    story: {
      type: Object as PropType<{
        points: number;
        author: string;
        created_at_i: number;
        num_comments: number;
        objectID: string;
      }>,
      required: true,
    },
  },
  methods: {
    /**
     * Show published time in a human readable format
     */
    showPublishedTime(timestamp: number) {
      return convertToTimesAgo(timestamp);
    },
  },
});
</script>
