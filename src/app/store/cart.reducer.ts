
import * as CartActions from './cart.actions';
import { createReducer, on } from '@ngrx/store';


export const initialState: any = {
    products: [],
    error: null,
  };

export const reducers = createReducer(
    initialState,
  on(CartActions.getCart, (state) => ({
    ...state,
  })),
  on(CartActions.postCart, (state, action) => {
    state = {
      ...state,
      products: [...state.products, action.products]
    }
    return state;
  }),
  on(CartActions.removeItemFromCart, (state, action) => {
    const products = [...state.products];
    const index = products.findIndex(x => x.id === action.product.productId);
    products.splice(index, 1);
    
    state = {
      ...state,
      products: products
    }
    return state;
  }),
  on(CartActions.clearCart, (state, action) => {
    const products: any = [];
    
    state = {
      ...state,
      products: products
    }
    return state;
  }),
  on(CartActions.getCartFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(CartActions.updateQuantity, (state, action) => {
    const products = [...state.products];
    // const index = products.findIndex(x => x.id === action.product.productId);
    // products.splice(index, 1);
    
    state = {
      ...state,
      products: products
    }
    return state;
  }),

);