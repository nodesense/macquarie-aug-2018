import { Product } from './../../models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  today = new Date();

  operator: string;

  // products: Product[] = [];
  // subscription: Subscription;

  products$: Observable<Product[]>;

  // step 1: create object for component
  constructor(private productService: ProductService) { }

  // step 2: template/View, initialize in browser

  // life cycle hook: called after view initialized
  ngOnInit() {
    console.log('list oninit');
     
    // this.subscription = this.productService.getProducts()
    //                    .subscribe(  products =>  {
    //                       console.log('got products', products);
    //                       this.products = products;
    //                    });

    this.products$ = this.productService.getProducts();

    console.log('leaving oninit');
  }

  ngOnDestroy() {
    console.log('list onDestroy');
    // this.subscription.unsubscribe();
  }

}
