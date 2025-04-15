// import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
// import { initialCartState } from './cart.state';

// export const cartReducer = createReducer(
//   initialCartState,
//   on(CartActions.addToCart, (state, { productId, quantity }) => ({
//     ...state,
//     items: {
//       ...state.items,
//       [productId]: (state.items[productId] || 0) + quantity
//     }
//   })),
//   on(CartActions.updateQuantity, (state, { productId, quantity }) => ({
//     ...state,
//     items: {
//       ...state.items,
//       [productId]: Math.max(0, quantity)
//     }
//   })),
//   on(CartActions.removeFromCart, (state, { productId }) => {
//     const { [productId]: removed, ...remainingItems } = state.items;
//     return {
//       ...state,
//       items: remainingItems
//     };
//   }),
//   on(CartActions.createOrder, (state, { order }) => ({
//     ...state,
//     orders: [...state.orders, order],
//     items: {} // Clear cart items after order is created
//   })),
//   on(CartActions.clearCart, (state) => ({
//     ...state,
//     items: {}
//   }))
// );

import { createReducer, on } from '@ngrx/store';
import { Order } from './cart.model';


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
  on(CartActions.getCartFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);