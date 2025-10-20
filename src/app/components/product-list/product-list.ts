import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product-service';
import { FormsModule } from '@angular/forms';
import { ProductCard } from '../product-card/product-card';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
private productService = inject(ProductService);
  products = signal<Product[]>([]);
  searchTerm = signal<string>('');
  loading = signal<boolean>(true);

  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.products().filter(product =>
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  });

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products.set(data.products);
      this.loading.set(false);
    });
  }
}
