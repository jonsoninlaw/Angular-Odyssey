import { Component } from '@angular/core';
import { Kitten } from './kitten';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userKittens:Kitten[] = [];

  listKittens:Kitten[] = [{name: "Isidore", photo: "https://placekitten.com/150/150"},
  {name: "Billy", photo: "https://placekitten.com/200/200"}];

  title = 'kitten-story';

  onGetKitten($event) {
    this.userKittens.push($event);
    this.listKittens.splice(this.listKittens.indexOf($event), 1);
  }

  onNewKitten($event) {
    this.listKittens.push($event);
  }
}