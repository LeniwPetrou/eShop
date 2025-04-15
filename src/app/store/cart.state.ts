import { Order } from "./cart.model";

export interface CartState {
  items: { [productId: string]: number };
  orders: Order[];
}

export const initialCartState: CartState = {
  items: {},
  orders: []
};