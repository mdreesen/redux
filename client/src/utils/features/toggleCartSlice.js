import {
    TOGGLE_CART
  } from "../../actions";

  const initialState = {
      status: 'All'
  };

export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
};