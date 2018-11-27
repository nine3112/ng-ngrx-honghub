import { Component, OnInit } from '@angular/core';
import ListMenu from './navside.model'
import * as AppActions from '../../../app.actions'
import {Store} from '@ngrx/store'
import {State as AppState} from '../../../reducers/app.reducer'
import {AppActionTypes} from '../../../app.actions'

@Component({
  selector: 'app-navside',
  templateUrl: './navside.component.html',
  styleUrls: ['./navside.component.scss']
})
export class NavsideComponent implements OnInit {

  private menus = ListMenu;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {

  }

  setPages(page) {
    this.store.dispatch({
      type: AppActionTypes.SetPagesInApp,
      payload: page
    })
  }

}
