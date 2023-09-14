import { expect } from 'chai';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import CommentItem from '@/components/item/CommentItem.vue';
import { HNItemData } from '@/interfaces/HNItemData';

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

  beforeEach(() => {
    wrapper = shallowMount(CommentItem, {
      propsData: { comment },
    });
    wrapper.setProps({ comment: comment });
  });

  afterEach(() => {
    wrapper.unmount();
  });


  it('should render parent comment item', () => {
    // display of author
    expect(wrapper.props().comment.author).to.equal(comment.author);
    // display created_at_i
    expect(wrapper.props().comment.created_at_i).to.equal(comment.created_at_i);
    // display points
    expect(wrapper.props().comment.points).to.equal(comment.points);
  });


});