import { configureStore } from '@reduxjs/toolkit';
import { config } from 'npm';

const store = configureStore({
  reducer: {
    elements: elements.reducer,
    heroes: heroes.reducer,
  },
});

export default store;
