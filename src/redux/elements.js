import { createSlice } from '@reduxjs/toolkit';
import elements from './apiElementList';

const initialState = {
  elements: [],
  status: null,
};

const reducer = createSlice({
  name: 'elements',
  initialState,

  extraReducers: {
    [elements.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [elements.fulfilled]: (state, action) => ({
      ...state,
      elements: action.payload,
      status: 'success',
    }),
    [elements.rejected]: (state) => ({
      ...state,
      loading: 'something went wrong',
    }),
  },
});

export default reducer.reducer;
