import {HttpClient} from '@angular/common/http';
import {OnInit, Injectable} from '@angular/core';

@Injectable()
export class GetAllContactService implements OnInit
{
    contacts: any;

    constructor(private http: HttpClient) 
    { 
        this.contacts = this.getAllContacts();
    }

  ngOnInit() {
    this.http.get('/user').subscribe(data => {
      console.log(data);
      this.contacts = data;
    });
  }
  getAllContacts()
  {
      this.http.get('/user').subscribe(data => {
      console.log(data);
      this.contacts = data;
    });
  }
}