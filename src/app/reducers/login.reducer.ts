import * as LoginActions from '../actions/login.actions'
export interface State {
    login?: boolean;
    username?: string;
  }
  
  export const initialState: State = {
    login: false
  };
  
  export function reducer(state = initialState, action: LoginActions.Login): State {
    switch (action.type) {
      case LoginActions.LoginActionTypes.Logins:
        return handleSetPages(state, action);
  
      default:
        return state;
    }
  }
  
  function handleSetPages(state: State, action: LoginActions.Login): State {
    return {
      ...state,
      login: action.payload.login,
      username: action.payload.username
    };
  }