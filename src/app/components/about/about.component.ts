import { Component, OnInit } from '@angular/core';

interface Member {
  name: string; // mandatory
  role: string; // mandatory
  exp?: number;  // optional
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  members: Member[] = [
    {
      name: 'Member 1',
      role: 'CEO',
      exp: 10
    },
    {
      name: 'Member 2',
      role: 'SE',
      exp: 5
    }
  ];

  showMembers = true;

  constructor() { }

  ngOnInit() {
  }


  empty() {
    this.members = [];
  }

}
