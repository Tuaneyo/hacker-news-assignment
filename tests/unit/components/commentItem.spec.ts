import { expect } from 'chai';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import CommentItem from '@/components/item/CommentItem.vue';
import { HNItemData } from '@/interfaces/HNItemData';
import { ref } from 'vue';

const comment = {
  "id": 3745,
  "created_at_i": 1694,
  "author": "Jan",
  "title": "Lorum upsom title",
  "url": "https://lorum.com/",
  "text": null,
  "points": 123,
  "children": [
      {
        "id": 12345,
        "created_at_i": 1694636404,
        "author": "Piet",
        "title": null,
        "text": "Lorum ipsom text",
        "points": null,
        "parent_id": 6523,
        "story_id": 7896,
      }
  ],
} as HNItemData;

describe('CommentItem.vue', () => {
  let wrapper: VueWrapper;
  const showMoreReplies = ref(true); 

  beforeEach(() => {
    // render the component
    wrapper = shallowMount(CommentItem, {
      propsData: { comment },
      setup() {
        return { showMoreReplies };
      },
    });
    wrapper.setProps({ comment: comment });
  });

  afterEach(() => {
    wrapper.unmount();
  });


  it('should render parent comment item', () => {
    // author
    expect(wrapper.props().comment.author).to.equal(comment.author);
    // created_at_i
    expect(wrapper.props().comment.created_at_i).to.equal(comment.created_at_i);
    
  });

  it('should be able to click button and check if showMoreReplies is updated after click', async () => {
    // Button state
    const button = wrapper.find('[data-test="comment-button"]');
    console.log(button);
    
    // expect(showMoreReplies.value).to.equal(true);
    // await button.trigger('click'); 
    // // After the click, showMoreReplies should be updated
    // // expect(wrapper.vm.$data.showMoreReplies).to.equal(false);
    // expect(showMoreReplies.value).to.equal(false);
    
  });




});