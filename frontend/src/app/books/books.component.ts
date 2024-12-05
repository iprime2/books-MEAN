import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from './book.service';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ]
})
export class BooksComponent {

  constructor(
    private bookService: BookService,
    private toastr: ToastrService
  ) {}

  books: any[] = [];
  newBook: any = { name: '', price: null, quantity: null };

  ngOnInit(): void {
    this.getBooks();
  }

  // Fetch all books from the backend
  getBooks() {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
      this.toastr.info('Book fetched successfully!'); 
    });
  }

  // Add a new book
  addBook() {
    this.bookService.addBook(this.newBook).subscribe((book) => {
      this.books.push(book);
      this.newBook = { name: '', price: null, quantity: null };
      this.toastr.success('Book added successfully!'); 
    });
  }

  // Update a book
  updateBook(book: any) {
    this.bookService.updateBook(book).subscribe((updatedBook) => {
      this.getBooks();
      this.toastr.info('Book updated successfully!'); 
    });
  }
  
  // Delete a book
  deleteBook(id: any) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter((b) => b._id !== id);
      this.toastr.error('Book deleted successfully!'); 
    });
  }
}
