import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import {State as LoginState} from '../../../reducers/login.reducer'
// import {AppActionTypes} from '../../../app.actions'
import {LoginActionTypes} from '../../../actions/login.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  statelogin : LoginState = {
    username:"1234",
    login:true
  }

  constructor(private store: Store<LoginState>) { }

  ngOnInit() {
  }

  login() {
    this.store.dispatch({
      type: LoginActionTypes.Logins,
      payload: this.statelogin
    })
  }

}
