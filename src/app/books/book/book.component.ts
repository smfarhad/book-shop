import { Component,Input, OnInit } from '@angular/core';
import { Book } from 'src/app/Interfaces/book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book = {} as Book;
  isInCart:boolean=false;
  constructor(private cartService:CartService){
    
    
  }
  ngOnInit(): void {
    console.log('On in it');
    
  }

  addToCart(){
    this.isInCart=true;
    this.cartService.add(this.book);
  }
  removeFromCart(){
    this.isInCart=false;
    this.cartService.remove(this.book);
  }
}
