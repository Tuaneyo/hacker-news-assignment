import { Module } from 'vuex';
import { RootState } from '../index';
import { RepositoryFactory } from '@/services/RepositoryFactory';
import { HNItemData } from '@/interfaces/HNItemData';
const HNSearchRepository = RepositoryFactory.get('HNSearch');

interface ItemState {
  item: HNItemData;
}


const itemModule: Module<ItemState, RootState> = {
  namespaced: true,
  state: {
    item: {} as HNItemData,
  },
  mutations: {
    setItem(state, item) {
      state.item = item;
    },
  },
  actions: {
    async fetchItem({ commit }, id: number) {
      try {     
        const response = await HNSearchRepository.getItem(id);
        commit('setItem', response.data);
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    }
  },
  getters: {
    getPageItem(state) {
      return state.item;
    }
  },
};

export default itemModule;
