import { configureStore } from '@reduxjs/toolkit';
import elements from './elements';
import heroes from './heroes';

const store = configureStore({
  reducer: {
    elements,
    heroes,
  },
});

export default store;
