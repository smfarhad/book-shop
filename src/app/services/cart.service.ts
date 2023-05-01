import { Injectable } from '@angular/core';
import { Book } from '../Interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Book[]=[];

  constructor() { }
  
  add(book:Book){
      this.cart.push(book);
      //console.log(this.cart);
  }
  get(){
    //console.log(this.cart);
    return this.cart;
  }
  remove(book:Book){
    this.cart = this.cart.filter((b)=>b!=book)
  }
}
