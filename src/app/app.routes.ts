import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Cart } from './components/cart/cart';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';

export const routes: Routes = [
  { path: 'home', component: ProductList },
  { path: 'cart', component: Cart },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];