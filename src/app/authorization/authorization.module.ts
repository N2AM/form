import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './store/user.state';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserStateService } from './store/user-state.service';
import { UserDataService } from './services/user-data.service';
import { RetryInterceptor } from './interceptors/retry.interceptor';

@NgModule({
  declarations: [SignupComponent, DialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthorizationRoutingModule,
    NgxsModule.forFeature([UserState]),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [UserStateService, UserDataService, { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true }
  ]
})
export class AuthorizationModule { }
