<template>
  <tr>
    <td class="text-sm">
      <span v-if="storyIndex" >{{ storyIndex }}.</span>
    </td>
    <td>
      <a :href="story.url" class="text-black" target="_blank">{{ story.title }} </a>
      <span class="text-xs pl-1">
        <a :href="story.url" target="_blank">({{ showHostname(story.url) }})</a>
      </span>
    </td>
  </tr>
</template>

<script lang="ts">
import { parseMainUrl } from '@/utils/parseMainUrl';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'StoryTitle',
  props: {
    storyIndex: {
      type: Number,
      default: undefined, 
    },
    story: {
      type: Object as PropType<{ title: string; url: string }>,
      required: true,
    },
  },
  methods: {
    showHostname(hostname: string) {
      return parseMainUrl(hostname);
    }
  },
});
</script>
