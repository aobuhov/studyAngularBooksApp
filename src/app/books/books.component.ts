import {Component, OnInit} from '@angular/core';
import {HttpEvent} from "@angular/common/http";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  name: string = 'Clean code';
  author: string = 'Bod';
  src: string = 'favicon.ico';
  isShowing:boolean = true;
  constructor() {
  }
  ngOnInit(): void {
  }

  protected readonly onmouseover = onmouseover;
}
