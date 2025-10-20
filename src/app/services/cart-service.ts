import { Injectable, signal, computed } from '@angular/core';
import { Product } from './product-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<Product[]>([]);

  cartCount = computed(() => this.cartItems().length);

  totalPrice = computed(() => this.cartItems().reduce((acc, item) => acc + item.price, 0));

  addToCart(product: Product) {
    this.cartItems.update(items => [...items, product]);
  }

  removeFromCart(id: number) {
    this.cartItems.update(items => items.filter(item => item.id !== id));
  }

  clearCart() {
    this.cartItems.set([]);
  }
}