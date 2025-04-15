// import { CartState } from './cart.state';
import { Order } from './cart.model';

export interface CartState {
  products: Order[];
}

export interface AppState {
  cart: CartState;
}
