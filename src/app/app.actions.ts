import {Action} from '@ngrx/store';

export enum AppActionTypes {
    LoadApps = '[App] Load Apps',
    SetPagesInApp = '[App] Set Pages in Apps'
}

export class LoadApps implements Action {
    readonly type = AppActionTypes.LoadApps;
}

export class SetPagesInApp implements Action {
    readonly type = AppActionTypes.SetPagesInApp;
    constructor(public payload: string) {}
}

export type AppActions = LoadApps | SetPagesInApp;