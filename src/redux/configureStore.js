import { configureStore } from '@reduxjs/toolkit';
import elements from './elements';

const store = configureStore({
  reducer: {
    elements,
  },
});

export default store;
