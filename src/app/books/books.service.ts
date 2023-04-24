import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }
  getBooks(){
    return [
      {
        name:'Clean Code',
        author:'Robert C Martin',
        src:'https://picsum.photos/200/300.webp?random=1',
        price: 700
      }, {
        name:'Pragmatic Programmer',
        author:'David Tomas',
        src:'https://picsum.photos/200/300.webp?random=2',
        price:500
      },{
        name:'Book 3',
        author:'Author 3',
        src:'https://picsum.photos/200/300.webp?random=3',
        price:450
      },{
        name:'Book 3',
        author:'Author 3',
        src:'https://picsum.photos/200/300.webp?random=4',
        price:450
      },{
        name:'Book 3',
        author:'Author 3',
        src:'https://picsum.photos/200/300.webp?random=5',
        price:450
      },{
        name:'Book 3',
        author:'Author 3',
        src:'https://picsum.photos/200/300.webp?random=6',
        price:450
      },{
        name:'Book 3',
        author:'Author 3',
        src:'https://picsum.photos/200/300.webp?random=7',
        price:450
      },{
        name:'Book 3',
        author:'Author 3',
        src:'https://picsum.photos/200/300.webp?random=8',
        price:450
      },{
        name:'Book 3',
        author:'Author 3',
        src:'https://picsum.photos/200/300.webp?random=9',
        price:450
      },{
        name:'Book 3',
        author:'Author 3',
        src:'https://picsum.photos/200/300.webp?random=10',
        price:450
      },{
        name:'Book 3',
        author:'Author 3',
        src:'https://picsum.photos/200/300.webp?random=11',
        price:450
      }
    ];
  }
}
