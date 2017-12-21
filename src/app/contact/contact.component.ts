import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ChangeSizeDirective} from '../directives/change-size.directive'

@Component(
    {
        selector: 'app-contact',
        templateUrl:'./contact.component.html',
        styles: []
    }
)
export class ContactComponent
{
    contacts: any;
    color: String = 'cyan';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/contact').subscribe(data => {
      console.log(data);
      this.contacts = data;
    });
  }
}