import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {switchMap, map} from 'rxjs/operators';
import * as AppActions from './app.actions'
import * as LoginActions from './actions/login.actions'
import { Router } from '@angular/router';
import {AppActionTypes} from './app.actions'
import {State as AppState} from './reducers/app.reducer'
@Injectable()
export class AppEffects {

    constructor(private actions$ : Actions, private router : Router, private Appstore: Store<AppState>) {}

    @Effect()
    SetPagesInApp$ : Observable < Actions > = this
        .actions$
        .pipe(ofType(AppActions.AppActionTypes.SetPagesInApp), switchMap((state) => {
            this.router.navigate([state['payload']]);
            return [];
        }));

    @Effect()
    Logins$ : Observable < Actions > = this
        .actions$
        .pipe(ofType(LoginActions.LoginActionTypes.Logins), switchMap((state) => {
            // this.router.navigate([state['payload']]);
            this.Appstore.dispatch({
                type: AppActionTypes.SetPagesInApp,
                payload: 'management'
              })
            return [];
        }));
        
}
