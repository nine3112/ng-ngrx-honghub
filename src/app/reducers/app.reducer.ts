import * as AppActions from '../app.actions'
export interface State {
    page?: string;
  }
  
  export const initialState: State = {
    page: ''
  };
  
  export function reducer(state = initialState, action: AppActions.AppActions): State {
    switch (action.type) {
      case AppActions.AppActionTypes.SetPagesInApp:
        return handleSetPages(state, action);
  
      default:
        return state;
    }
  }
  
  function handleSetPages(state: State, action: AppActions.SetPagesInApp): State {
    return {
      ...state,
      page: action.payload
    };
  }