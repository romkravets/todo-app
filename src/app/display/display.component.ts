import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input()
  public value: number;

  constructor() {
    console.log('constructor', this.value);
  }

  public ngOnInit(): void {
    console.log('OnInit', this.value);
  }

}
