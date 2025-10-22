import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import * as CartActions from '../store/cart.actions';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs/operators';
import { Order } from '../store/cart.model';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems$: Observable<Order[]>;
  cartTotal$: Observable<number>;

  constructor(private store: Store<AppState>,
    private snackBar: MatSnackBar
  ) { 
    this.cartItems$ = this.store.select(state => state.cart?.products ?? []);
    this.cartTotal$ = this.cartItems$.pipe(
      map(items => this.calculateTotal(items))
    );
    
    this.loadCartItems();
  }

  private loadCartItems() {
    this.cartItems$.subscribe({
      next: (items) => {
      },
      error: (error) => {
        this.snackBar.open('Failed to load cart items.', 'Close', { duration: 3000 });
      }
    });
  }

  private calculateTotal(items: Order[]): number {
    return items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  removeFromCart(product: any) {
    this.store.dispatch(CartActions.removeItemFromCart({ product }));
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }
}
