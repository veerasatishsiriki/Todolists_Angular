import { Component, OnInit} from '@angular/core';
import { TodoseviceService } from '../todosevice.service';

@Component({
  selector: 'app-todosform',
  templateUrl: './todosform.component.html',
  styleUrl: './todosform.component.css'
})
export class TodosformComponent implements OnInit{
  todoInput="";

  constructor(private ts:TodoseviceService ){ }
  ngOnInit(): void {

  }
  addTask(){
    this.ts.addTodo(this.todoInput)
    this.todoInput=""
  }
  resetForm(){
    this.todoInput=""

  }
}
