import { HighlightDirective } from './directives/highlight.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './components/like/like.component';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule, // ngFor, ngIf, ng-tempalte, ng-content, ...ngClass
  ],
  declarations: [
      LikeComponent,
      PowerPipe,
      FilterPipe,
      HighlightDirective, 

      // lot of internal components,
      // SourceAccountComponent, DestinationAccountComponent,
      
      // TransferMoneyComponent, public
    ],

    // public facing
    exports: [
      LikeComponent,
      PowerPipe,
      FilterPipe,
      HighlightDirective
      // TransferMoneyComponent
    ]

})
export class SharedModule { }
