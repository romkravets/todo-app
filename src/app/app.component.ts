import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoArray = [];

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
}
