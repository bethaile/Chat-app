import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { TimeGetRequestService } from '../services/time-get-request.service';
//import {ChangeColorDirective} from '../directives/change-color.directive'


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

  constructor(private http: HttpClient, public timeGetRequestService: TimeGetRequestService) 
  {
    console.log(this.timeGetRequestService);
   }
  
  

  ngOnInit() {
    this.http.get('/contact').subscribe(data => {
      console.log(data);
      this.contacts = data;
    });
  }
}