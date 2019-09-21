import { IForm } from 'src/interfaces/myform.model';
import * as fromRoot from '../state/app.state';
import * as formAction from '../actions/myform.action';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface FormsState extends EntityState<IForm>{
  selectedFormId:number|null,
  loading:boolean,
  loaded:boolean,
  error:string
}

export interface AppState extends fromRoot.AppState{
forms:FormsState
}

export const formAdapter:EntityAdapter<IForm>=createEntityAdapter<IForm>();
export const defaultForm:FormsState={
  ids:[],
  entities:{},
  selectedFormId:null,
  loading:false,
  loaded:false,
  error:''
}

export const initialState:FormsState=formAdapter.getInitialState(defaultForm)

export function formReducer(state=initialState, action:formAction.Action):FormsState{
  switch(action.type){
    case formAction.FormActionType.LOAD_FORMS:{
      return {
        ...state,
        loading:true
      };
    }
    case formAction.FormActionType.LOAD_FORMS_SUCCESS:{
      return formAdapter.addAll(action.payload,{
        ...state,
        loading:false,
        loaded:true
      })
    }
    case formAction.FormActionType.LOAD_FORMS_FAIL:{
      return {
        ...state,
        entities:{},
        loading:false,
        loaded:true,
        error:action.payload
      };
    }

    case formAction.FormActionType.LOAD_FORMS:{
      return {
        ...state,
        loading:true
      };
    }
    case formAction.FormActionType.LOAD_FORM_SUCCESS:{
      return formAdapter.addOne(action.payload,{
        ...state,
        selectedFormId:action.payload.id
      })
    }
    case formAction.FormActionType.LOAD_FORM_FAIL:{
      return {
        ...state,
        error:action.payload
      };
    }
    case formAction.FormActionType.CREATE_FORM_SUCCESS:{
      return formAdapter.addOne(action.payload, state)
    }
    case formAction.FormActionType.CREATE_FORM_FAIL:{
      return {
        ...state,
        error:action.payload
      };
    }
    case formAction.FormActionType.UPDATE_FORM_SUCCESS:{
      return formAdapter.updateOne(action.payload, state)
    }
    case formAction.FormActionType.UPDATE_FORM_FAIL:{
      return {
        ...state,
        error:action.payload
      };
    }
    case formAction.FormActionType.DELETE_FORM_SUCCESS:{
      return formAdapter.removeOne(action.payload, state)
    }
    case formAction.FormActionType.DELETE_FORM_FAIL:{
      return {
        ...state,
        error:action.payload
      };
    }
    default :{
      return state;
    }
  }
}

const getFormFeatureState=createFeatureSelector<FormsState>(
  "forms"
)

export const getForms=createSelector(
  getFormFeatureState,
  formAdapter.getSelectors().selectAll
);

export const getFormsLoading=createSelector(
  getFormFeatureState,
  (state:FormsState)=> state.loading
);

export const getFormsLoaded=createSelector(
  getFormFeatureState,
  (state:FormsState)=> state.loaded
);

export const getError=createSelector(
  getFormFeatureState,
  (state:FormsState)=> state.error
);

export const getCurrentFormId=createSelector(
  getFormFeatureState,
  (state:FormsState)=>state.selectedFormId
)

export const getCurrentForm =createSelector(
  getFormFeatureState,
  getCurrentFormId,
  state=>state.entities[state.selectedFormId]
)
