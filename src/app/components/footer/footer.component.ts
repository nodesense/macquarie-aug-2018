import { Component, OnInit,
         Input,


         Output, EventEmitter

} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // property binding

  @Input('data-company')
  company: string;

  @Input()
  year: number;

  @Input()
  address: any;


  // Output, event binding, child to parent
  @Output()
  contactEvent: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit() {
    console.log(typeof this.address, this.address);
  }

  onContact() {
    // publish an event
    this.contactEvent.emit('From Footer');
  }

}
