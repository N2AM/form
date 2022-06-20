import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms"

export const containsUserName = (firstName: string, lastName: string, password: string): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const formGroup = control as FormGroup;
        const firstName$: AbstractControl | null = formGroup.get(firstName);
        const lastName$: AbstractControl | null = formGroup.get(lastName);
        const password$: string = formGroup.get(password)?.value.toLowerCase();
        if (formGroup.errors && !formGroup.errors['containsUserName']) {
            // return if another validator has already found an error on the matchingControl
            return null;
        }
        else if (firstName$?.dirty && lastName$?.dirty) {
            return (password$.includes(firstName$?.value.toLowerCase()) || password$.includes(lastName$?.value.toLowerCase())) ?
                { containsUserName: true } : null

        } else {
            return null
        }
    }
}