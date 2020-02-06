import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Welcome to Jon\'s website !';
  moviesList:string[] = ['The Godfather', 'The Shawshank Redemption', 'Gone with the wind', 'Casablanca', 'It\'s a wonderful life', 'Star Wars'];
  displayMovies:boolean = true;
}