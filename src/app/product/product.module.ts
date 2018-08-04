import { SaveAlertGuard } from './guards/save-alert.guard';
import { CanEditGuard } from './guards/can-edit.guard';
import { SharedModule } from './../shared/shared.module';
import { ProductService } from './services/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
 

import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: 'products',

    //path: '', // for lazy loading

    component: ProductHomeComponent,

    // nested navigation
    children: [
      {
        path: 'list', // products/list, where as products from parent
        component: ProductListComponent
      },
      {
        path: 'create',
        component: ProductEditComponent,
        canActivate: [CanEditGuard],
        canDeactivate: [SaveAlertGuard]
      },

      {
        path: 'edit/:id',  // products/edit/12345
        component: ProductEditComponent,
        canActivate: [CanEditGuard],
        canDeactivate: [SaveAlertGuard]
      },

      {
        path: 'search',
        component: ProductSearchComponent
      },
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    SharedModule
  ],
  declarations: [
      ProductHomeComponent, 
      ProductListComponent, 
      ProductEditComponent, 
      ProductSearchComponent],

  providers: [
    // global for entire application, singleton
    ProductService,

    CanEditGuard,
    SaveAlertGuard
  ]
})
export class ProductModule { }