import { RouterReducerState } from '@ngrx/router-store';

import { initialConfigState, IConfigState } from './config.state';
import {IMyFormsState, initialFormSate } from './myForm.state';


export interface IAppState {
  router?: RouterReducerState;
  forms: IMyFormsState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  forms: initialFormSate,
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
