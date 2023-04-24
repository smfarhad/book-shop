import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from '../Interfaces/book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService) {

  }
  getCart() {
    return this.cartService.get()
  }

}
