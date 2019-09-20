import { IForm } from 'src/interfaces/myform.model';
import * as fromRoot from '../state/app.state';
import * as formAction from '../actions/myform.action';

// const initialState={
//   forms:[
//     {	name: "Test form 1",
//     background: "#fff111",
//     fields: [
//       {
//         placeholder: "Test placeholder 1",
//           pattern: 1,
//           fieldType: 1
//       },
//       {
//         placeholder: "Test placeholder 2",
//           pattern: 2,
//           fieldType: 1
//       }
//     ]
//     }
//   ],
//   loading:false,
//   loaded:true
//   }

//   export function formReducer(state=initialState, action){
//     switch(action.type){
//       case 'LOAD_FORMS':{
//         return{
//           ...state,
//           loading:true,
//           loaded:false
//         }
//       }
//       default:{
//         return state;
//       }
//     }
//   }

export interface FormsState{
  forms:IForm[],
  loading:boolean,
  loaded:boolean,
  error:string
}

export interface AppState extends fromRoot.AppState{
forms:FormsState
}

export const initialState:FormsState={
  forms:[],
  loading:false,
  loaded:false,
  error:''
}

export function formReducer(state=initialState, action:formAction.Action):FormsState{
  switch(action.type){
    case formAction.FormActionType.LOAD_FORMS:{
      return {
        ...state,
        loading:true
      };
    }
    case formAction.FormActionType.LOAD_FORMS_SUCCESS:{
      return {
        ...state,
        loading:false,
        loaded:true,
        forms:action.payload
      };
    }
    case formAction.FormActionType.LOAD_FORMS_FAIL:{
      return {
        ...state,
        forms:[],
        loading:false,
        loaded:true,
        error:action.payload
      };
    }
    default :{
      return state;
    }
  }

}
