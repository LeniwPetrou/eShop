import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../models/product.interface';

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
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = signal<Product[]>([]);
  isLoading = signal<boolean>(true);
  quantities = signal<{ [key: number]: number }>({});

  constructor(private productService: ProductService) {
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

  updateQuantity(productId: number, change: number): void {
    const currentQuantities = this.quantities();
    const newQuantity = Math.max(0, (currentQuantities[productId] || 0) + change);
    this.quantities.set({ ...currentQuantities, [productId]: newQuantity });
  }

  addToCart(productId: number): void {
    const quantity = this.quantities()[productId] || 0;
    if (quantity > 0) {
      console.log(`Added ${quantity} of product ${productId} to cart`);
      // Reset quantity after adding to cart
      this.updateQuantity(productId, -quantity);
    }
  }
}