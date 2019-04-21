import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actions-controls',
  templateUrl: './actions-controls.component.html',
  styleUrls: ['./actions-controls.component.scss']
})
export class ActionsControlsComponent implements OnInit {
  @Output()
  public increase: EventEmitter<number> = new EventEmitter();

  @Output()
  public decrease: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void { }

  public onDecrease(value: string): void {
    this.decrease.emit(+value);
  }

  public onIncrease(value: string): void {
    this.increase.emit(+value);
  }

}
