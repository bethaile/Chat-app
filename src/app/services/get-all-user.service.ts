import {HttpClient} from '@angular/common/http';
import {OnInit, Injectable} from '@angular/core';

@Injectable()
export class GetAllUserService implements OnInit
{
    users: any;

    constructor(private http: HttpClient) 
    { 
        this.users = this.getAllUsers();
    }

  ngOnInit() {
    this.http.get('/user').subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }
  getAllUsers()
  {
      this.http.get('/user').subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }
}