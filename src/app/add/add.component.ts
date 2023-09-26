import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../product.module';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  p: Product = new Product();

  constructor(private service: ProductService, private router: Router) {
  }

  save() {
    this.service.add(this.p);

    this.router.navigate(['/list']);

  }

 
}
