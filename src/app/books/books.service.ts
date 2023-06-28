import { Injectable } from '@angular/core';
import {Book} from "../models/book";

@Injectable()
export class BooksService {

  constructor() { }
  getBooks(): Array<Book> {
    return [
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
      },
      {
        name: 'Easy learning',
        author: 'Jim',
        src: 'favicon.ico',
        amount: 138
      }
    ];

  }
}
