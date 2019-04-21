import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoArray = [];
  public counterValue = 0;

  addTodo(value) {
    this.todoArray.push(value);
  }

  deleteItem(index) {
    this.todoArray.splice(index, 1);
  }

  todoSubmit(value: any) {
    if (value !== '') {
      this.todoArray.push(value.todo);
    } else {
      alert('Fieled required **');
    }
  }

  public onIncrease(value: number): void {
    this.counterValue += value;
  }

  public onDecrease(value: number): void {
    this.counterValue -= value;
  }
}
