import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface OrderItem {
  itemName: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  selectedItems: OrderItem[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  addToCart(itemName: string) {
    const quantityInput = document.getElementById(itemName.replace(/\s+/g, '') + "Qty") as HTMLInputElement;
    const quantity = parseInt(quantityInput.value);
    const price = this.getPrice(itemName);

    const selectedItem: OrderItem = { itemName, quantity, price };

    // Check if the item already exists in the cart
    const existingItemIndex = this.selectedItems.findIndex(item => item.itemName === itemName);

    if (existingItemIndex !== -1) {
      // If item exists, update its quantity
      this.selectedItems[existingItemIndex].quantity += quantity;
    } else {
      // If item doesn't exist, add it to the cart
      this.selectedItems.push(selectedItem);
    }
  }

  submitSelectedItemsToCart() {
    let message = "Selected Items:\n";
    this.selectedItems.forEach(item => {
      message += `${item.itemName} - Quantity: ${item.quantity} - Price: ${item.price * item.quantity}\n`;
    });
    alert(message);
    // Clear the selected items array after displaying the alert
    this.selectedItems = [];
  }

  getPrice(itemName: string): number {
    switch (itemName) {
      case 'Cinnamon Dolce Latte':
        return 120;
      case 'Flat White':
        return 110;
      case 'Espresso':
        return 130;
      case 'Cold Brew':
        return 170;
      case 'Java Chip Frauppucino':
        return 135;
      case 'Mocha Frauppucino':
        return 160;
      case 'Cappuccino':
        return 140;
      case 'Caffe Mocha':
        return 140;
      case 'Caramel Mochatio':
        return 130;
      default:
        return 0;
    }
  }
}
