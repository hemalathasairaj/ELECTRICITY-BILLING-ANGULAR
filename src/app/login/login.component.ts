import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CusserviceService } from '../cusservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService:AuthService,
              private service : CusserviceService,
              private router:Router) { }

  ngOnInit(): void {

  }
  
  onSubmit(loginForm: NgForm){
    console.log(loginForm.value); 
    const user=this.authService.authUser(loginForm.value);
    console.log(user);

    if(user){
      localStorage.setItem('user',JSON.stringify(user));
      this.router.navigate(['customer_list'])

    }
    else{
      console.log(' Invaild user')
    }
  }

}