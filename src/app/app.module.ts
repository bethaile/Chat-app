import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { ChatService } from './chat.service';


import {CapitalizePipe} from './user-detail/capitalize.pipe';



import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {ContactCreateComponent} from './contact-create/contact-create.component';
import {ContactComponent} from './contact/contact.component';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import { ChatComponent } from './chat/chat.component';
import {LoginComponent } from './login/login.component';
import{AuthGuard} from './service/canAguard';
import{AuthService} from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    ContactCreateComponent,
    ContactDetailComponent,
    ContactComponent,
    ChatComponent,
    LoginComponent,
    CapitalizePipe,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [ChatService,  AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
