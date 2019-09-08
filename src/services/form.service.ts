import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
  forms=[
    {
      name:'First form',
      date:new Date(2011, 0, 1, 0, 0, 0, 0)

    },
    {
      name:'Second form',
      date:new Date(2017, 7, 5, 0, 0, 0, 0)
    },
    {
      name:'Third form',
      date:new Date(2019, 8, 8, 0, 0, 0, 0)
    }
  ]
}
