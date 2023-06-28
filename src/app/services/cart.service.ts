import { Injectable } from '@angular/core';
import {Book} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Book> = new Array<Book>();
  constructor() { }
  add(book: Book) {
    this.cart.push(book);
  }
  remove(book: Book) {
    this.cart = this.cart.filter(b=> b != book);
  }
  count(): number {
    return this.cart.length;
  }
  get(): Array<Book> {
    return this.cart;
  }
}
