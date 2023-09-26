import { Component } from '@angular/core';
import { Product } from '../product.module';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent {
  products: Product[] = [];
  min : number = 0.0;
  max : number = 0.0;
  constructor(private service : ProductService){}
  search(){
    this.service.listByRange(this.min,this.max).subscribe(data => this.products=data);
  }

}
