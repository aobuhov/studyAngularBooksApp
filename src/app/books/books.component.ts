import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  books: Array<Book> = [
    {
      name: 'Clean code',
      author: 'Ben',
      src: 'favicon.ico',
      amount: 100
    },
    {
      name: 'Hard code',
      author: 'Alex',
      src: 'favicon.ico',
      amount: 56
    }
  ];

  card: Array<Book> = new Array<Book>();

  isShowing:boolean = true;

  constructor() {
  }
  ngOnInit(): void {
  }

  addToCard(book: Book) {
    this.card.push(book);
  }

  protected readonly onmouseover = onmouseover;
}
