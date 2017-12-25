import { Component, OnInit } from '@angular/core';
import { AuthService, User } from  '../service/auth.service';
import {Router} from "@angular/router";
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IUser} from './IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 // providers: [AuthService]
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  loginMessage = "";
  constructor (private http: HttpClient, 
    private authService: AuthService, 
    private router: Router,  private formBuilder: FormBuilder) {
      this.loginForm = formBuilder.group({
        'userName': ['', [
          Validators.required,
        
        ]],
        'password': ['', [Validators.required]]
      });
    }
  
  ngOnInit() {


  }

  login() {
    //if (!this.authService.login(this.user)) {
     //this.routes.navigate(['/addCustomerComponent'])
    //}
        
    this.authService.login(this.http, this.loginForm.value.userName, this.loginForm.value.password)
    .subscribe(
      res => {
        const respo: IUser = <IUser>res;
        //console.log(res);
        if (res != null && res.toString() != ""  ) {
          console.log("logged in");
          console.log(res);
          // console.log( userName  + ':' + password);
          console.log(respo.userName);
          localStorage.setItem('userName', respo.userName);

          console.log(localStorage.getItem('userName'));
          this.router.navigate(['/chat']);
        }
        console.log("unable to login 1");
        this.loginMessage = "Invalid Username/Password";
      },
      error => {
        console.log("unable to login 2");
        this.loginMessage = "Invalid Username/Password";
      }
    );
      
    }

}