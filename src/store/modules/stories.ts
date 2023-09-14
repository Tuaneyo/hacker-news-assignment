import { Module } from 'vuex';
import { RootState } from '../index';
import { HNSearchData } from '@/interfaces/HNSearchData';
import { RepositoryFactory } from '@/services/RepositoryFactory';
const HNSearchRepository = RepositoryFactory.get('HNSearch'); // use same get 'name' defined in Respository Factory

interface StoriesState {
  stories: HNSearchData;
}

const storiesModule: Module<StoriesState, RootState> = {
  namespaced: true,
  state: {
    stories: {} as HNSearchData,
  },
  mutations: {
    setStories(state, stories) {
      state.stories = stories;
    },
  },
  actions: {
    async fetchStoriesByPage({ commit }, pageNumber: number) {
      try {        
        const response = await HNSearchRepository.getStoriesByPage(pageNumber);
        commit('setStories', response.data);
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    }
  },
  getters: {
    getFrontPageStories(state) {
      return state.stories;
    }
  },
};

export default storiesModule;
