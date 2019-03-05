import * as React from 'react';

import { Table } from '../styled';
import { IBook } from '../types';
import BookBadge from './BookBadge';

interface Props {
  books: IBook[];
}

const BooksList: React.FC<Props> = ({ books }) => (
  <Table>
    <thead>
      <tr>
        <th>Book</th>
        <th>Author</th>
        <th>Category</th>
        <th>Status</th>
        <th>Owner</th>
      </tr>
    </thead>
    <tbody>
      {books.map(({ id, title, author, rent, category, user }) => (
        <tr key={id}>
          <td>{title}</td>
          <td>{author}</td>
          <td>{category ? category.title : ''}</td>
          <td>
            <BookBadge status={rent ? rent.status : 'Returned'} />
          </td>
          <td>{user.name}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default BooksList;
