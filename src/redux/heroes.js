import { createSlice } from '@reduxjs/toolkit';
import heroes from './apiHeroList';

const initialState = {
  heroes: [],
  status: null,
};

const reducer = createSlice({
  name: 'heroes',
  initialState,

  extraReducers: {
    [heroes.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [heroes.fulfilled]: (state, action) => ({
      ...state,
      heroes: action.payload,
      status: 'success',
    }),
    [heroes.rejected]: (state) => ({
      ...state,
      status: 'something went wrong',
    }),
  },
});

export default reducer.reducer;
