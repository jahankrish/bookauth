import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  bookForm: FormGroup | any;

  myBooks: any[] = [];

  constructor(private book: BookService) {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      bookId: new FormControl(),
      bookName: new FormControl(),
      author: new FormControl(),
    });
  }

  onPushBook() {
    const bookId = this.bookForm.get('bookId').value;
    const bookName = this.bookForm.get('bookName').value;
    const author = this.bookForm.get('author').value;

    this.myBooks.push({
      bookId: bookId,
      bookName: bookName,
      author: author,
    });
  }

  onSave() {
    this.book.saveBook(this.myBooks).subscribe((sub) => {
      console.log(sub);
    });
  }

  onGet() {
    this.book.getBook().subscribe((sub) => {
      console.log(sub);
    });
  }
}
