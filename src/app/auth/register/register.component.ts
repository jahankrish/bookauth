import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;

  constructor(private auth:AuthService ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
    });
  }

  onRegister() {
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;
    this.auth.RegisterUser(email, password);
  }
}
