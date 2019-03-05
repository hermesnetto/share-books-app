import { IBookForm } from '../types';

export interface LoginData {
  authorize: {
    token: string;
  };
}

export interface LoginVariables {
  email: string;
  password: string;
}

export interface CreateBookData {
  createBook: {
    id: string;
  };
}

export interface CreateBookVariables extends IBookForm {}
