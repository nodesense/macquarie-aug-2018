import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 
    console.log('product service created');
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:7070/api/products');
  }
}
