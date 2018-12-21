import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { TodolistComponent } from './views/todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
