
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
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


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },

    {
      path: 'users',
      component: UserComponent,
      data: { title: 'User List' }
    },
  
    {
      path: 'chat',
      component: ChatComponent,
      data: { title: 'Chat' }
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
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: [],
    
  })
  export class AppRoutingModule { }