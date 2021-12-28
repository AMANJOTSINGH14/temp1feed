import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
auth:boolean=false;
user:any=343434|43434|34344;
authListener=new BehaviorSubject<boolean>(false);
constructor() { }
isAuth(){
  return this.auth;
}

}
