import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/product-service';
import { CartService } from '../../services/cart-service';


@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;
  private cartService = inject(CartService);

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
