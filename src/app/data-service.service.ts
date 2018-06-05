import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  fruits =['Mango','Apple','WaterMelon'];

  myFunc()
  {
    return 'This is my First Service';
  }
  
}
