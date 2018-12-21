import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState, ADD_TODO, REMOVE_TODO, ITodo } from '../../rBoxes/store';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  
  @select() todos;
  model:ITodo = {
  	id:0,
  	description: '',
  	assignedTo:'',
  	priority:'',
  	isCompleted:false
  }
  constructor(private ngRedux:NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit() {
  	this.ngRedux.dispatch({type:ADD_TODO , todo: this.model})
  }

}
