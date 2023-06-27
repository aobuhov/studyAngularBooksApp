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
  isDisable:boolean = false;
  constructor() {
  }
  ngOnInit(): void {
  }

  handleClick():void {
    this.isDisable = true;
  }

   myName: string = 'Aleksei';

  protected readonly onmouseover = onmouseover;
}
