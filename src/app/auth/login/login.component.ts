import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup |  any;

  constructor(private auth:AuthService, private route: Router) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup ({

     email: new FormControl("", [Validators.required, Validators.email] ),
     password: new FormControl ("", [Validators.required, Validators.minLength(6), Validators.maxLength(10)])

    });
  }
  onLogin(){
   const email =  this.loginForm.get('email').value;
   const password =  this.loginForm.get('password').value;
   this.auth.loginUser(email, password);
  
  }
  Register(){
     
    this.route.navigate(['/register']);

  }

}
