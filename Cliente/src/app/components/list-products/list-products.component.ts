import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  listProducts: Product[] = [
    { id: 1, name: 'Pesi', description: 'rica', price: 400, stock: 500 },
    { id: 2, name: 'Corona', description: 'sobrevalorada', price: 900, stock: 50 },
    { id: 3, name: 'Bramma', description: 'sabroza', price: 300, stock: 700 }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
