import { Component } from '@angular/core';
import { Product } from '../product.module';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  products : Product[] = [];
  category : string = '';

  constructor(private service : ProductService){}

  search(){
    this.service.listByCategory(this.category).subscribe(data => this.products = data);
  }
}
