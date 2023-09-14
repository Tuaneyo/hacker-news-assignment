import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Header from '@/components/header/Header.vue';

describe('Header.vue', () => {
  it('shpuld renders the header with the correct logo and title', () => {
    const wrapper = mount(Header);

    expect(wrapper.find('img[src="https://news.ycombinator.com/y18.svg"]').exists()).to.be.true;

    expect(wrapper.text()).to.include('Hacker News');
  });

});