import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {GetAllUserService} from '../services/get-all-user.service';
import {GetAllContactService} from '../services/get-all-contact.service';

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
    checkUser = false;
    checkContact = false;
    errorToAddContact: String;
    errorUserNotExist: String;
    contactValue: String;
    //user = {};

  constructor(private http: HttpClient, private router: Router
              , private route: ActivatedRoute, private getAllUserService: GetAllUserService
              , private getAllContactService: GetAllContactService) { }

  ngOnInit() {
    //this.getUser(this.route.snapshot.params['id']);
  }

  //Before save, we must ensure that this is an existing contact
  saveContact() {
    //console.log(this.getAllUserService);
    
    for(let user of this.getAllUserService.users)
    {
      console.log("check for user (checkUser): "+ this.checkUser);
      console.log("user.userName: "+user.userName+"; this.contactValue: "+this.contactValue);
      if(user.userName == this.contactValue) // Check if user exist
      {
        console.log('User Already exist you can add it as a contact');
        this.checkUser = true;
        break;
      }
    }

    
    if(this.checkUser) //If user exist, check to see if it's already in contact
    {
      for(let c of this.getAllContactService.contacts)
      {
        console.log("check for user (checkContact): "+ this.checkContact);
        console.log("contact.contactUserName: "+c.contactUserName+"; this.contactValue: "+this.contactValue);
        if(c.contactUserName == this.contactValue) // Check if it's already a contact
        {
          console.log('Contact Already exist dont need to add contact again');
          this.checkContact = true;
          break;
        }
      }

      //contact
       if(this.checkContact) //If contact is not exist, create it
        {
          this.errorToAddContact = "Contact Already exist!";
          return ;
        }
        else
        {
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
    else
    {
      console.log("This user does not exist!");
      this.errorUserNotExist = "This user does not exist!"
      return;
    }
    
    //console.log("check for contact");
    
   
  }

  getUser(id) {
    this.http.get('/user/'+id).subscribe(data => {
      //this.users = data;
    });
  }
}