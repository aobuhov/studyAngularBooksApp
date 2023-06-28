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
  card: Array<Book> = new Array<Book>();

  isShowing:boolean = true;

  constructor(private booksService: BooksService) {

  }
  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  addToCard(book: Book) {
    this.card.push(book);
  }

  protected readonly onmouseover = onmouseover;
}
