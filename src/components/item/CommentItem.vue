<template>

  <!-- Parent comments -->
  <tr class="space-x-3" v-if="comment.text">
    <td>
      <div 
        class="flex gap-x-1 text-xs mb-1"
      >
        <span data-testid="author">{{ comment.author }} </span>

        <span>{{ showPublishedTime(comment.created_at_i) }} </span>

        <span v-if="comment.children.length > 0">|</span>

        <span v-if="comment.children && comment.children.length > 0">
          <button data-testid="comment-button" class="hover:underline" @click="showHideMoreReplies">
            {{ showMoreReplies ? '[-]' : totalChildCount + ' more' }}
          </button>
        </span>
        
      </div>
      <p v-html="comment.text" class="text-black mb-2"></p>
    </td>
  </tr>

  <!-- Nested comments -->
  <tr v-if="showMoreReplies && comment.children && comment.children.length > 0">
    <td class="nested-comments">
      <comment-item
        data-testid="nested-comment-item"
        v-for="(nestedComment) in comment.children"
        :key="nestedComment.id"
        :comment="nestedComment"
      ></comment-item>
    </td>
  </tr>

</template>

<script lang="ts">
import { HNItemData } from '@/interfaces/HNItemData';
import { convertToTimesAgo } from '@/utils/convertToTimesAgo';
import { defineComponent, onMounted, PropType, ref } from 'vue';

export default defineComponent({
  name: 'CommentItem',
  props: {
    comment: {
      type: Object as PropType<HNItemData>,
      required: true,
    },
  },
  setup(props) {
    const showMoreReplies = ref(true as boolean);
    const totalChildCount = ref(0 as number);

    /**
     * Show or hide more replies
     */
    const showHideMoreReplies = () => {
      showMoreReplies.value = !showMoreReplies.value;
    };

    /**
     * Recursively count total number of children
     */
    const countTotalChildren = (comment: HNItemData): void => {
      if (comment.children && comment.children.length > 0) {
        totalChildCount.value += comment.children.length;
        comment.children.forEach((child) => {
          countTotalChildren(child);
        });
      }
    };

    onMounted(() => {
      countTotalChildren(props.comment);
    });

    const showPublishedTime = (timestamp: number) => {
      return convertToTimesAgo(timestamp);
    };

    return {
      showMoreReplies,
      totalChildCount,
      showPublishedTime,
      showHideMoreReplies
    };
  },
});
</script>

<style scoped>
.nested-comments {
  padding-left: 20px;
}
</style>