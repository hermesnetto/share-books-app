export type ID = string;
export type RentStatus = 'Returned' | 'Expired' | 'Rented';

export interface IUser {
  id: ID;
  name: string;
}

export interface IRent {
  id: ID;
  status: RentStatus;
  userId: ID;
  bookId: ID;
  user: IUser;
  dueDate: string;
  daysLeft: number;
}

export interface ICategory {
  id: ID;
  title: string;
}

export interface IBook {
  id: ID;
  title: string;
  description: string;
  author: string;
  publisher: string;
  publicationDate: string;
  image: string;
  user: IUser;
  rent?: IRent;
  rents?: IRent[];
  category?: ICategory;
}

export interface IBookForm {
  id?: ID;
  title: string;
  description: string;
  author: string;
  publisher: string;
  image: string;
  publicationDate: string;
  category: string;
}
