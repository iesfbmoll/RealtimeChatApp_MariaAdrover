import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { ChatComponent } from 'src/app/pages/chat/chat.component';
import { AuthGuard } from './guards/auth.guard';

// Indicates which is the module to render depending on the path
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {path: 'signup',  component: SignupComponent},
  {
    path: 'chat',  canActivate: [AuthGuard],
    children: [
      {path: '', component: ChatComponent},
      {path: ':chatroomId', component: ChatComponent}
    ]
  },
  {path:'**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
