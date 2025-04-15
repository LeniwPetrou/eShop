import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../models/product.interface';
import { Store } from '@ngrx/store';
import * as CartActions from '../store/cart.actions';
import { OrderItem } from '../store/cart.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    HttpClientModule, 
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [ProductService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = signal<Product[]>([]);
  isLoading = signal<boolean>(true);
  quantities = signal<Map<number, number>>(new Map());
  private store = inject(Store);

  constructor(
    private productService: ProductService
  ) {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products.set(response.products);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  getQuantity(productId: number): number {
    return this.quantities().get(productId) || 0;
  }

  updateQuantity(productId: number, change: number): void {
    const currentQuantity = this.getQuantity(productId);
    const newQuantity = Math.max(0, currentQuantity + change);
    
    const updatedQuantities = new Map(this.quantities());
    updatedQuantities.set(productId, newQuantity);
    this.quantities.set(updatedQuantities);
  }

  addToCart(product: Product): void {
    const quantity = this.getQuantity(product.id);
    if (quantity > 0) {
      const orderItem: OrderItem = {
        productId: product.id.toString(),
        quantity: quantity,
        price: product.price,
        img: product.images[0],
        name: product.title
      };
      this.store.dispatch(CartActions.postCart({products: orderItem}));
      this.updateQuantity(product.id, -quantity);
    }
  }
}