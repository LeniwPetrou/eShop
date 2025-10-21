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

export const clearCart = createAction(
    '[Cart] Remove Items from Cart'
);

export const getCartFailure = createAction(
    '[Cart] Get Cart failure',
    props<{ error: string }>()
);

export const updateQuantity = createAction(
    '[Cart] Update Quantity in Cart'
);