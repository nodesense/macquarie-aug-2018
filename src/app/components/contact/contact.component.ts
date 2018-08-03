import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactLikes = 100;
  
  address: any = {}; // undefined
  phone = 12345679;

  constructor() { }

  ngOnInit() {
  }

}
