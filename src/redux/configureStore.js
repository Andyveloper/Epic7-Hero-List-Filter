import { configureStore } from '@reduxjs/toolkit';
import elements from './apiElementList';
import heroes from './apiHeroList';

const store = configureStore({
  reducer: {
    elements: elements.reducer,
    heroes: heroes.reducer,
  },
});

export default store;
