import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {GetAllUserService} from '../services/get-all-user.service'

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit
{
    contact = {};

  constructor(private router: Router, private route: ActivatedRoute
              , private http: HttpClient, private getAllUserService: GetAllUserService) { }

  ngOnInit() {
    this.getContactDetail(this.route.snapshot.params['id']);
  }

  getContactDetail(id) {
    this.http.get('/contact/'+id).subscribe(data => {
      console.log("data in getContactDetail: "+data);
      this.contact = data;
    });
  }

  deleteUser(id) {
    this.http.delete('/contact/'+id)
      .subscribe(res => {
          this.router.navigate(['/contacts']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}