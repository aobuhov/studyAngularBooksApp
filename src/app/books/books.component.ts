import {Component, OnInit} from '@angular/core';
import {HttpEvent} from "@angular/common/http";
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

  isShowing:boolean = true;

  constructor() {
  }
  ngOnInit(): void {
  }

  protected readonly onmouseover = onmouseover;
}
