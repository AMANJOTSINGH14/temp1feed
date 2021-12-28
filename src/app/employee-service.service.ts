
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {map} from 'rxjs/operators'
import { formShape } from './form.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  storeFeedback:any= [];
  startedEditing = new Subject<number>();
  constructor(private http:HttpClient) { }

  addFeedback(obj:any){
    // console.log(obj);
   this.http.post('https://appfeedback-2419f-default-rtdb.firebaseio.com/test.json',obj).
   subscribe(data=>console.log(data))
    // this.storeFeedback.push(obj);
    }

    listFeedback(){
      // console.log(this.storeFeedback)
      return this.http.get<formShape[]>('https://appfeedback-2419f-default-rtdb.firebaseio.com/test.json').pipe(
        map(data=>{const h=Object.values(data)
return h
        }))
      // ).subscribe(
      //   data=>{this.storeFeedback=data

      //   })
        // return this.storeFeedback;
    }
}
