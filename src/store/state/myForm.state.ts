import { IForm } from 'src/interfaces/myform.model';

export interface IMyFormsState{
  forms:IForm[],
  selectedForm:IForm
}

export const initialFormSate:IMyFormsState={
  forms:null,
  selectedForm:null
}
