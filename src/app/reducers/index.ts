import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as AppReducer from './app.reducer'
import * as LoginReducer from './login.reducer'
export interface State {
    app : AppReducer.State,
    login : LoginReducer.State
}

export const reducers : ActionReducerMap < State > = {
    app: AppReducer.reducer,
    login: LoginReducer.reducer
};

export const metaReducers : MetaReducer < State > [] = !environment.production
    ? []
    : [];
