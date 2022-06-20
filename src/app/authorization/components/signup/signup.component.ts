import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { take, Subscription } from 'rxjs';
import { User } from '../../models/user-data.model';
import { UserStateService } from '../../store/user-state.service';
import { DialogComponent } from '../dialog/dialog.component';
import { containsUserName } from '../../validators/contains-user-name.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  hide = true;
  readonly #subscriptions: Subscription = new Subscription();

  signupForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", [Validators.required, Validators.pattern(
      "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
    )]],
    password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d$@$!%*?&].{7,}'), Validators.minLength(8)]
    ],
  }, { validators: containsUserName("firstName", "lastName", "password") })

  constructor(private fb: FormBuilder, private userStateService: UserStateService, private dialog: MatDialog) { }


  ngOndestroy(): void {
    this.#subscriptions.unsubscribe();
  }

  addUser(): void {
    if (this.signupForm.valid) {
      this.userStateService.setUser.emit(this.signupForm.value);
      this.#subscriptions.add(
        this.userStateService.user$.pipe(take(2)).subscribe((user: User) => {
          if (user.firstName) {
            const dialogRef = this.dialog.open(DialogComponent, {
              width: '450px',
              data: { ...user }
            });

            dialogRef.afterClosed().subscribe(result => {
              this.signupForm.reset();
              this.signupForm.markAsPristine();
              this.signupForm.markAsUntouched();
            });
          }
        }),
      )
    }
  }
}

