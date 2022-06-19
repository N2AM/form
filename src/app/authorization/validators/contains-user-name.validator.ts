import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms"

export const containsUserName = (firstName: string, lastName: string, password: string): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const formGroup = control as FormGroup;
        const firstName$: string = formGroup.get(firstName)?.value.toLowerCase();
        const lastName$: string = formGroup.get(lastName)?.value.toLowerCase();
        const password$: string = formGroup.get(password)?.value.toLowerCase();

        return (password$.includes(firstName$) || password$.includes(lastName$)) ?
            { containsUserName: true } : null

    }

}