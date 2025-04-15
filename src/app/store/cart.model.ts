export interface CartState {
  items: { [productId: string]: number };
  orders: Order[];
}

export interface Order {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img?: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  img: any;
  name: string;
}

export const initialCartState: CartState = {
  items: {},
  orders: []
};
