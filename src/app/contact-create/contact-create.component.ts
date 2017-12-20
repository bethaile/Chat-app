import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component(
    {
        selector: 'app-contact-create',
        templateUrl:'./contact-create.component.html',
        styles:[]
    }
)
export class ContactCreateComponent
{
    contact = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveContact() {
    this.http.post('/contact', this.contact)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/contact-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}