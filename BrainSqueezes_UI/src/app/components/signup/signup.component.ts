import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  formvalid: boolean = false;
  signUpForm:FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    repeatPassword: ['', Validators.required],
  })

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthenticationService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
  }

  signUp() {
    if (this.signUpForm.invalid) {
      this.formvalid = true;
    }
    else{
      console.log(this.signUpForm.value);
      this.authService.signUp(this.signUpForm.value).subscribe({
        next:(response) => {
          this.toastr.success(response.message);
          this.signUpForm.reset();
          this.router.navigate(['/login']);
        },
        error:(err) => {
          this.toastr.error(err?.error.message)
        }
      });
    }
  }
}
