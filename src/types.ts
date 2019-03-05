export type ID = number;
export type RentStatus = 'Returned' | 'Expired' | 'Rented';

export interface IUser {
  id: ID;
  name: string;
}

export interface IRent {
  id: ID;
  status: RentStatus;
}

export interface ICategory {
  id: ID;
  title: string;
}

export interface IBook {
  id: ID;
  title: string;
  author: string;
  user: IUser;
  rent?: IRent;
  category?: ICategory;
}

export interface IBookForm {
  title: string;
  description: string;
  author: string;
  publisher: string;
  image: string;
  publicationDate: string;
}
