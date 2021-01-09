import React from 'react';
import { combineReducers } from 'redux';

import addMultipleToCartSlice from './addMultipleToCartSlice';
import addToCartSlice from './addToCartSlice';
import clearCartSlice from './clearCartSlice';
import removeFromCartSlice from './removeFromCartSlice';
import toggleCartSlice from './toggleCartSlice';
import updateCartQuantitySlice from './updateCartQuantitySlice';
import updateCategoriesSlice from './updateCategoriesSlice';
import updateCurrentCategorySlice from './updateCurrentCategorySlice';
import updateProductSlice from './updateProductSlice';

const rootReducer = combineReducers( {
  // always return a new object for the root state
    addMultipleToCartSlice: addMultipleToCartSlice,
    addToCartSlice: addToCartSlice,
    clearCartSlice: clearCartSlice,
    removeFromCartSlice: removeFromCartSlice,
    removeFromCartSlice: removeFromCartSlice,
    toggleCartSlice: toggleCartSlice,
    updateCartQuantitySlice: updateCartQuantitySlice,
    updateCategoriesSlice: updateCategoriesSlice,
    updateCurrentCategorySlice: updateCurrentCategorySlice,
    updateProductSlice: updateProductSlice
  }
)

export default rootReducer;










/*
import {
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    CLEAR_CART,
    TOGGLE_CART
  } from "../../actions";

export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity
          }
          return product
        })
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
};
*/