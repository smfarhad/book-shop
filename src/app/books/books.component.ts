import { Component } from '@angular/core';
import { Book } from '../Interfaces/book';
import { BooksService } from './books.service';




@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {

  books:Book[] = [];

  constructor(private bookService:BooksService){}
  ngOnInit():void{
    this.books = this.bookService.getBooks()
  }

  isDisabled:boolean=false;
  isShowing:boolean=true;
  handleClick(){
    this.isDisabled=true;
  }
   myName:string = 'Farhad';
 
  toggleBooks(){
    this.isShowing=!this.isShowing;
  }

  // 
  //  2:26 of 3:54

}
