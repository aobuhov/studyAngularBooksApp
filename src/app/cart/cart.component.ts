import { Component } from '@angular/core';
import {CartService} from "../services/cart.service";
import {Book} from "../models/book";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService) {
  }

  getCount(): number {
    return this.cartService.count();
  }

  getCart(): Array<Book> {
    return this.cartService.get();
  }

}
