import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:3000/api/books';

  constructor(private http: HttpClient) {}

  // Fetch all books
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new book
  addBook(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }

  // Update an existing book
  updateBook(book: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${book._id}`, book);
  }

  // Delete a book by ID
  deleteBook(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
