import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'JahanProject';

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyC7You1OsGWgcVoluk7cEnMyLM3yZk70CI',
    };
    firebase.initializeApp(firebaseConfig);
  }

  onLogout() {
    this.auth.logout();
  }
}
