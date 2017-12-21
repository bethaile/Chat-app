import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';

import {ContactCreateComponent} from './contact-create/contact-create.component';
import {ContactComponent} from './contact/contact.component';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';

import {GetAllUserService} from './services/get-all-user.service';
import {GetAllContactService} from './services/get-all-contact.service';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TimingInterceptor} from './interceptor/timing.interceptor'

//import {ChangeColorDirective} from './directives/change-color.directive';
//import {ContactCountPipeDirective} from './directives/contact-count-pipe.directive';
import {SharedModule} from './shared-module/shared.module'
import { TimeGetRequestService } from './services/time-get-request.service';

const appRoutes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    data: { title: 'User List' }
  },
  {
    path: 'user-details/:id',
    component: UserDetailComponent,
    data: { title: 'User Details' }
  },
  {
    path: 'user-create',
    component: UserCreateComponent,
    data: { title: 'Create User' }
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent,
    data: { title: 'Edit User' }
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactComponent,
    data: { title: 'Contact List' }
  },
  {
    path: 'contact-create',
    component: ContactCreateComponent,
    data: { title: 'Create Contact' }
  },
  {
    path: 'contact-details/:id',
    component: ContactDetailComponent,
    data: { title: 'Contact Details' }
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    ContactCreateComponent,
    ContactComponent,
    ContactDetailComponent//,
    //ChangeColorDirective,
    //ContactCountPipeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    SharedModule
  ],
  exports: [],
  providers: [GetAllUserService, GetAllContactService, TimeGetRequestService, {
              provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true,
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
