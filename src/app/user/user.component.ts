import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeGetRequestService } from '../services/time-get-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient, public timeGetRequestService: TimeGetRequestService) { }

  ngOnInit() {
    this.http.get('/user').subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

}
