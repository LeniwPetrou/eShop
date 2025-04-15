import { Component, inject } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import * as CartActions from '../store/cart.actions';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs/operators';
import { Order, OrderItem } from '../store/cart.model';
import { cartSelector } from '../store/cart.selectors';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartState {
  items: CartItem[];
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    // DecimalPipe
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  private productService = inject(ProductService);
  
  cartItems$: Observable<Order[]>;

  constructor(private store: Store<AppState>) { 
    // Debug full state first
    this.store.subscribe(state => {
      console.log('Raw state:', state);
    });

    this.cartItems$ = this.store.select(state => {
      console.log('State in selector:', state);
      return state.cart?.products ?? [];
    });
    
    this.loadCartItems();
  }

  private loadCartItems() {
    this.cartItems$.subscribe({
      next: (items) => {
        console.log('Cart Items:', items || []);
      },
      error: (error) => {
        console.error('Error loading cart items:', error);
      }
    });
  }

  updateQuantity(productId: number, quantity: number) {
    // this.store.dispatch(CartActions.updateQuantity({ productId, quantity }));
  }

  removeFromCart(productId: number) {
    // this.store.dispatch(CartActions.removeFromCart({ productId }));
  }

  clearCart() {
    // this.store.dispatch(CartActions.clearCart());
  }
}
