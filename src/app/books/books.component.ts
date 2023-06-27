import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  name: string = 'Clean code';
  author: string = 'Bod';
  src: string = 'favicon.ico';
  constructor() {
  }
  ngOnInit(): void {
  }

}
