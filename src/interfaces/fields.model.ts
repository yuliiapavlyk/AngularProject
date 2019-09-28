export interface IFields{
  id: number,
  placeholder:string,
  pattern: {
      id:number,
      name: string,
      value: string
  },
  fieldType: {
      id: number,
      type: string,
      formControl: string
  }
  }
