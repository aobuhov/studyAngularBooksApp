import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  @Input() book: Book = {} as Book;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.add(this.book);
  }

}
