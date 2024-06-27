import { Component } from '@angular/core';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewOrdersComponent {
  orders: { product: string, price: number }[] = [
    { product: 'Cappuccino', price: 4.5 },
    { product: 'Latte', price: 5 },
    { product: 'Espresso', price: 3 }
    // Add more orders here
  ];

  constructor() { }
}