import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient, private auth: AuthService) {}

  saveBook(books: any[]): Observable<any> {
    const tk = this.auth.getAuthToken();
    return this.httpClient.post(
      'https://madhttp-default-rtdb.firebaseio.com/data.json?auth=' + tk,
      books
    );
  }

  getBooks(): Observable<any> {
    
    const tk = this.auth.getAuthToken();
    return this.httpClient.get(
      'https://madhttp-default-rtdb.firebaseio.com/data.json?auth=' + tk
    );
  }
}
