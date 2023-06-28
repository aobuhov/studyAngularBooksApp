import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book";
import {BooksService} from "./books.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  books: Array<Book> = new Array<Book>();
  cart: Array<Book> = new Array<Book>();

  isShowing:boolean = true;

  constructor(private booksService: BooksService) {

  }
  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  addToCart(book: Book) {
    this.cart.push(book);
  }

  protected readonly onmouseover = onmouseover;
}
