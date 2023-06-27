import {Component, OnInit} from '@angular/core';
import {HttpEvent} from "@angular/common/http";

interface Book {
  name:string,
  author: string,
  src: string
}

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
      src: 'favicon.ico'
    },
    {
      name: 'Hard code',
      author: 'Alex',
      src: 'favicon.ico'
    }
  ];

  isShowing:boolean = true;

  constructor() {
  }
  ngOnInit(): void {
  }

  protected readonly onmouseover = onmouseover;
}
