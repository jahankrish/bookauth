import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  bookForm: FormGroup | any;

  myBooks: any[] = [];

  constructor(private book: BookService, private route: Router) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.book.getBooks().subscribe((res) => {
      let bookList: Array<Array<Object>> = Object.values(res);
      this.myBooks = bookList.map((book) => book[0]);
    });
  }

  onAddBooks() {
    this.route.navigate(['/book']);
  }
  logOut() {
    this.route.navigate(['/login']);
  }
}
