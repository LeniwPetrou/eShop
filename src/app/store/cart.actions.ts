// import { createAction, props } from '@ngrx/store';

// export const addToCart = createAction(
//   '[Cart] Add Item',
//   props<{ productId: number; quantity: number }>()
// );

// export const updateQuantity = createAction(
//   '[Cart] Update Quantity',
//   props<{ productId: number; quantity: number }>()
// );

// export const removeFromCart = createAction(
//   '[Cart] Remove Item',
//   props<{ productId: number }>()
// );

// export const createOrder = createAction(
//   '[Cart] Create Order',
//   props<{ order: any }>()
// );

// export const clearCart = createAction('[Cart] Clear Cart');

import { createAction, props } from "@ngrx/store";
import { Order, OrderItem } from "./cart.model";

export const getCart = createAction(
    '[Cart] Get Cart Items',
);

export const postCart = createAction(
    '[Cart] Post Cart',
    props<{ products: any }>()
);

export const removeItemFromCart = createAction(
    '[Cart] Remove Item from Cart',
    props<{ product: OrderItem }>()
);

export const getCartFailure = createAction(
    '[Cart] Get Cart failure',
    props<{ error: string }>()
);