import {
    REMOVE_FROM_CART
  } from "../../actions";

  const initialState = {
    status: 'All'
};

export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
};