import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms"

export const containsUserName = (firstName: string, lastName: string, password: string): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const formGroup = control as FormGroup;
        const firstName$: string = formGroup.get(firstName)?.value;
        const lastName$: string = formGroup.get(lastName)?.value;
        const password$: string = formGroup.get(password)?.value;

        return (firstName$ || lastName$ && (password$.includes(firstName$) || password$.includes(lastName$))) ?
            { containsUserName: true } : null

    }

}