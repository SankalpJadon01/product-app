import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) {}
   add(p : Product){
    this.http.post("http://localhost:8080/add",p).subscribe(data => data = p);
   }
   list(){
    return this.http.get<Product[]>("http://localhost:8080/list");
   }
   listByCategory(category : string){
    return this.http.get<Product[]>("http://localhost:8080/"+category);
   }
   listByRange(min : number, max : number){
   return this.http.get<Product[]>("http://localhost:8080/price?min="+min+"&max="+max);
   }
}
