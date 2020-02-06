import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Kitten} from '../kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {

  kitten:Kitten = new Kitten();

  constructor() { }

  ngOnInit() {
  }

  @Output()
  newKitten:EventEmitter<any> = new EventEmitter();

  createKitten() {
    let kitten2:Kitten = new Kitten();
    kitten2.name = this.kitten.name;
    kitten2.photo = this.kitten.photo;
    this.newKitten.emit(kitten2);
  }
}