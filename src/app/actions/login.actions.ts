import { Action } from '@ngrx/store';

export enum LoginActionTypes {
  LoadLogins = '[Login] Load Logins',
  Logins = '[Login] Login'
}
export interface StateLogin {
  login?: boolean;
  username?: string;
}

export class LoadLogins implements Action {
  readonly type = LoginActionTypes.LoadLogins;
  constructor(public payload: string) {}
}

export class Login implements Action {
  readonly type = LoginActionTypes.Logins;
  constructor(public payload: StateLogin) {}
}

export type LoginActions = LoadLogins | Login;
