import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent {
  selectedItems: string[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  addToCart(itemName: string) {
    if (!this.selectedItems.includes(itemName)) {
      this.selectedItems.push(itemName);
      alert("SELECTED "+itemName);
      
    }
  }

  submitSelectedItemsToCart() {
    alert("OKAYFVYEVFB");
    alert(this.selectedItems);
    
    this.selectedItems.forEach(itemName => {
     // const quantityInput = document.getElementById(itemName.replace(/\s+/g, '') + "Qty") as HTMLInputElement;
      // const quantity = parseInt(quantityInput.value);
      const price = this.getPrice(itemName);
      const orderData = { itemName, price };
      this.http.post<any>('http://localhost:3000/api/order', orderData).subscribe(response => {
        console.log('Order submitted successfully:', response);
        alert(response.itemName);
        alert(orderData.itemName+orderData.price);
        // Clear the selected items array after submitting them to the cart
        //this.selectedItems = [];
     

        // Navigate to cart page after submitting all selected items
        
      }, error => {
        console.error('Error submitting order:', error);
        // Handle error cases here
      });
    });
    alert(this.selectedItems);
   // this.router.navigateByUrl('/cart-page');
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
