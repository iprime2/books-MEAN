# Books-MEAN

## Live Website/ Deployed Link

### Frontend Api URL

### Backend Api URL
https://books-mean.onrender.com/api/books

## Walkthrough videos
TODO

## Web Application Setup

### Prerequisites

**Node version 14.x**
**npm**
**Angular/CLI**

### Cloning the repository

```shell
git clone [https://github.com/iprime2/ecommerce-next-express.git](https://github.com/iprime2/books-MEAN.git)
```

## Setup Backend

### Change Directory

```shell
cd backend
```

### Install packages

```shell
npm install
```

### Setup .env file (create .env file in backend folder)

```js
MONGO_URI=
```

### Start the app

```shell
npm run start
```

## Setup Frontend

### Change Directory

```shell
cd frontend
```

### Install packages

```shell
npm install
```

### Start the app

```shell
ng serve
```

# API Documnetations

This document outlines the API endpoints for managing books in the application.

## Base URL
https://books-mean.onrender.com/api/books

## Endpoints

### 1. Get All Books
- **Method:** `GET`
- **Endpoint:** `/`
- **Description:** Retrieves a list of all books.
- **Response:**
  - **200 OK**
    - Content: An array of book objects.
  - **500 Internal Server Error**
    - Content: `{ "error": "Error fetching books" }`

### 2. Create a New Book
- **Method:** `POST`
- **Endpoint:** `/`
- **Description:** Creates a new book with the provided data.
- **Request Body:**
  - Content-Type: `application/json`
  - Example:
    ```json
    {
      "title": "Book Title",
      "author": "Author Name",
      "publishedDate": "2023-01-01",
      "genre": "Fiction"
    }
    ```
- **Response:**
  - **201 Created**
    - Content: The created book object.
  - **400 Bad Request**
    - Content: `{ "error": "Error creating book" }`

### 3. Update an Existing Book
- **Method:** `PUT`
- **Endpoint:** `/:id`
- **Description:** Updates the book with the specified ID.
- **Request Body:**
  - Content-Type: `application/json`
  - Example:
    ```json
    {
      "title": "Updated Book Title",
      "author": "Updated Author Name"
    }
    ```
- **Response:**
  - **200 OK**
    - Content: `{ "message": "Book updated successfully" }`
  - **400 Bad Request**
    - Content: `{ "error": "Error updating book" }`

### 4. Delete a Book
- **Method:** `DELETE`
- **Endpoint:** `/:id`
- **Description:** Deletes the book with the specified ID.
- **Response:**
  - **200 OK**
    - Content: `{ "message": "Book deleted successfully" }`
  - **400 Bad Request**
    - Content: `{ "error": "Error deleting book" }`
