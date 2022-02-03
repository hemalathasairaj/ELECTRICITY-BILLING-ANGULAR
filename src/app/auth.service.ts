import { Injectable } from '@angular/core';
import { CusserviceService } from './cusservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  localStorage: any;

  constructor() { }

  authUser(user: any){
    let UserArray=[{username:'hema@gmail.com',password:'pass'},{username:'pooja@gmail.com',password:'pass'}];
    
    return UserArray.find((p: { username: any; password: any; }) => p.username ===user.username && p.password === user.password);
  }
}