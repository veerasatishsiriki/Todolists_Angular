import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosformComponent } from './todosform/todosform.component';
import { TodolistsComponent } from './todolists/todolists.component';
import { TodoseviceService } from './todosevice.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TodosformComponent,
    TodolistsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),TodoseviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
