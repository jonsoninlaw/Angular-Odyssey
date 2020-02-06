import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = {
    name: "Doe",
    firstName: 'John',
    age: 25,
    quote: "",
    photo: "https://randomuser.me/api/portraits/lego/2.jpg"
  };

  constructor() { }

  ngOnInit() {
  }

  showAge() {
    let ageShow = document.getElementById("age");
    if (ageShow.hidden) {
      document.getElementById("age").hidden = false;
    } else {
      document.getElementById("age").hidden = true;
    }
  }

}
