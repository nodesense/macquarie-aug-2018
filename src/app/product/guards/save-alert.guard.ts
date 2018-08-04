import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { IEditableComponent } from '../components/product-edit/product-edit.component';
 
@Injectable({
  providedIn: 'root'
})
export class SaveAlertGuard implements CanDeactivate<IEditableComponent>  {
  canDeactivate(target: IEditableComponent) {
    console.log('save alert guard');

    if (target.saved) {
      return true;
    }

    return window.confirm('not saved, do you want to leave?');
  }
}
