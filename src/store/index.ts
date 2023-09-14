import { createStore, Store } from 'vuex';
import storiesModule from './modules/stories';
import itemModule from './modules/item';

// Define RootState
export interface RootState {
  appName: string;
  version: string;
}

const store = createStore<RootState>({
  modules: {
    stories: storiesModule,
    item: itemModule
  },
});

export default store;

// Define your root state's getter type for convenient use
export type RootGetter = {
  appName: string;
  version: string;
};

// Define a helper for use in components
export function useRootStore(): Store<RootState> {
  return store as Store<RootState>;
}