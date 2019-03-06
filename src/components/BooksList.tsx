import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'pipestyle';
import { Table } from '../styled';
import { IBook, ID } from '../types';
import BookBadge from './BookBadge';
import DeleteBookTrigger from '../containers/DeleteBookTrigger';
import EditBookTrigger from '../containers/EditBookTrigger';

interface Props {
  books: IBook[];
  currentUserId: ID | null;
}

const BooksList: React.FC<Props> = ({ books, currentUserId }) => (
  <Table>
    <thead>
      <tr>
        <th>Book</th>
        <th>Author</th>
        <th>Category</th>
        <th>Status</th>
        <th>Owner</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {books.map(({ id, title, author, rent, user, category }) => (
        <tr key={id}>
          <td>
            <Link to={`/books/${id}`}>{title}</Link>
          </td>
          <td>{author}</td>
          <td>{category ? category.title : ''}</td>
          <td>
            <BookBadge status={rent ? rent.status : 'Returned'} />
          </td>
          <td>{user.name}</td>
          <td>
            {currentUserId && user.id === currentUserId && (
              <>
                <DeleteBookTrigger
                  bookId={id}
                  render={onClick => (
                    <a href="#" title="Delete this book" onClick={onClick}>
                      <Icon className="pp-ico-trash" />
                    </a>
                  )}
                />
                <EditBookTrigger
                  bookId={id}
                  render={onClick => (
                    <a href="#" title="Edit this book" onClick={onClick}>
                      <Icon className="pp-ico-edit" />
                    </a>
                  )}
                />
              </>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default BooksList;
