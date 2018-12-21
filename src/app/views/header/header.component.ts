import { Component, OnInit, Input } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState, REMOVE_ALL } from '../../rBoxes/store';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public title = 'Todo List App';

  @select() todos;
  @select() lastUpdate;

  // @Input() inputParam;


  
  constructor(private ngRedux:NgRedux<IAppState>) { }

  ngOnInit() {
    // setInterval(() => this.inputParam.count++, 1000);
  }

  removeAll(): void{
  	this.ngRedux.dispatch({type:REMOVE_ALL});
  }

}
