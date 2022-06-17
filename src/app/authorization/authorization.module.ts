import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './store/user.state';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthorizationRoutingModule,
    NgxsModule.forFeature([UserState]),
  ]
})
export class AuthorizationModule { }
