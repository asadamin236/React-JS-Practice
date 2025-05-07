// features/countReducer.js
import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions
// export const increment = createAction("counter/increment");
export const incrementByAmount = createAction("counter/incrementByAmount");

// Initial state
const initialState = {
  value: 0,
};

// Reducer
const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementByAmount, (state, action) => {
    state.value += action.payload;
  });
});

export default rootReducer;
