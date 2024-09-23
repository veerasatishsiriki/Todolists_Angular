import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoseviceService {

  taskId=3;
  todoList=[
    {
      id:1, 'task':"Task1"
    },
    {
      id:2, 'task':"Task2"
    }
   ]
  constructor() { }
  addTodo(taskName){
    this.todoList.push({"id":this.taskId++,'task':taskName})
  }
  deleteTodo(index){
    this.todoList.splice(index,1)
  }

}
