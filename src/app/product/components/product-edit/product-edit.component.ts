import { Observable } from 'rxjs';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Brand } from '../../models/brand';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product(); // create

  brands$: Observable<Brand[]>;

  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log ('ID ', id);

    if (id) {
      this.productService.getProduct(id)
                         .subscribe( product => {
                           this.product = product;
                         });
    }

    this.brands$ = this.productService.getBrands();

  }

  saveProduct() {
    this.productService
        .saveProduct(this.product)
        .subscribe (savedProduct => {
            this.router.navigateByUrl('/products/list');
        });
  }

}
