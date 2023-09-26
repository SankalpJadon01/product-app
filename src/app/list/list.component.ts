import { Component } from '@angular/core';
import { Product } from '../product.module';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  products :  Product[] = [];
  constructor(private service : ProductService){
    this.service.list().subscribe(data => this.products = data);
  }
}
