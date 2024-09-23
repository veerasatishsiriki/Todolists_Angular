import { Component,OnInit} from '@angular/core';
import { TodoseviceService } from '../todosevice.service';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrl: './todolists.component.css'
})
export class TodolistsComponent implements OnInit {

 constructor(private ts:TodoseviceService ){ }

  todos;

 ngOnInit(): void{
  this.todos= this.ts.todoList
 }
 removeTodo(index){
  this.ts.deleteTodo(index)
 }
}
