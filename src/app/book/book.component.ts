import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../models/book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  @Input() book: Book = {} as Book;
  @Output() emitBook: EventEmitter<Book> = new EventEmitter<Book>();
  constructor() {
  }

  ngOnInit(): void {
  }

  addToCard() {
    this.emitBook.emit(this.book);
  }

}
