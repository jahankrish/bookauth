import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentToken: string;
  constructor(private route: Router) {
    this.currentToken = '';
  }

  RegisterUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((_resp) => {
        console.log(_resp);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  loginUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((_resp: any) => {
        this.getToken();
        this.route.navigate(['/book-list']);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  getToken() {
    firebase
      .auth()
      .currentUser!.getIdToken()
      .then((token: string) => {
        localStorage.setItem('token', token);
      });
    return this.currentToken;
  }

  isAuthenticated() {
    return localStorage.getItem('token') != null ? true : false;
  }

  getAuthToken() {
    return localStorage.getItem('token');
  }

  logout() {
    this.route.navigate(['/login']);
    firebase.auth().signOut();
    localStorage.removeItem('token');
  }
}
