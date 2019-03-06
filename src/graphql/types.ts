import { IBookForm, ID, RentStatus } from '../types';

// Login
export interface LoginData {
  authorize: {
    token: string;
  };
}

export interface LoginVariables {
  email: string;
  password: string;
}

// Create Book
export interface CreateBookData {
  createBook: {
    id: ID;
  };
}

export interface CreateBookVariables extends IBookForm {}

// Update Book
export interface UpdateBookData {
  updateBook: {
    id: ID;
  };
}

export interface UpdateBookVariables extends IBookForm {}

// Create Category
export interface CreateCategoryData {
  createCategory: {
    id: ID;
  };
}

export interface CreateCategoryVariables {
  title: string;
}

// Rent Book
export interface RentBookData {
  id: ID;
}

export interface RentBookVariables {
  bookId: ID;
}

// Return Book
export interface ReturnBookData {
  id: ID;
}

export interface ReturnBookVariables {
  rentId: ID;
}

// Delete Book
export interface DeleteBookData {
  id: ID;
}

export interface DeleteBookVariables {
  id: ID;
}
