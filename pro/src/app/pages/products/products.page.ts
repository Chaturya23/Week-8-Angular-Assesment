import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
// export class ProductsPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
// In your component.ts file
export class ProductsPage {
  products = [
    {
      name: 'Product 1',
      description: 'Painting on bulb',
      price: 19.99,
      imageUrl: 'assets/icon/p1.jpg' // Path to image for Product 1
    },
    {
      name: 'Product 2',
      description: 'Cute girl with a flower',
      price: 29.99,
      imageUrl: 'assets/icon/p2.jpg' // Path to image for Product 2
    },
    {
      name: 'Product 3',
      description: 'Astethic Shiko Art ',
      price: 10.99,
      imageUrl: 'assets/icon/p3.jpg' 
    },
    {
      name: 'Product 4',
      description: 'Born in paradise ',
      price: 15,
      imageUrl: 'assets/icon/p4.jpg' 
    },
  ];
  constructor(private authService: AuthService, private router: Router) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }
}



 