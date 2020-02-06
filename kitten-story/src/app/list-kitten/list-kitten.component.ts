import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {

  @Input() listKittens:Kitten[] = [];

  constructor() { }

  ngOnInit() {
  }

  @Output()
  getKitten:EventEmitter<any> = new EventEmitter();

  adoptKitten(event:any, index) {
    event.preventDefault();
    this.getKitten.emit(this.listKittens[index]);
  }
}