import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState, rootReducer, APP_INITIAL_STATE } from './rBoxes/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Todo List App';
  public resultobj = {
  	count:0
  }
  constructor(private ngRedux:NgRedux<IAppState>){
  	this.ngRedux.configureStore(rootReducer, APP_INITIAL_STATE);
  }
}
