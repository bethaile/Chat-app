import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface User {
  userName: string;
  password: string;
}

const USERS: User[] = [
  {userName: 'user', password: '123'}
];

@Injectable()
export class AuthService {

  users: User[] = USERS;
  session: boolean;

  constructor(private router: Router ) {
    this.session = false;
  }

  login(http: HttpClient, userName: string, password: string) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

    const url = 'http://localhost:3000/user/authenticate';
    const params = JSON.stringify({userName: userName, password: password});
    console.log('tryn to logged in');
    const respo = http.post(url, params, {'headers': headers});
    console.log(respo);
    return respo;

  }

  logout() {
    this.session = false;
    localStorage.removeItem('userName');
    this.redirect();
  }

  redirect() {
    this.router.navigate(['/login']);
  }

  check() {
    if (localStorage.getItem('userName') === null) {
      this.session = false;
      this.redirect();
    } else {
      this.session = true;
    }
  }

  isLoggedIn() {
    if (localStorage.getItem('userName') === null) {
        return false;
    } else {
      return true;
    }
  }

  getSession() {
    if(localStorage.getItem('userName') && localStorage.getItem('userName') != "" ){
      this.session = true;
      return this.session;
    }
    return false;
  }

  user() {
    return localStorage.getItem('userName');
  }

}
