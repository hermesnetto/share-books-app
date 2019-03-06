import * as React from 'react';
import { IBook, ID } from '../types';
import { Table } from '../styled';
import BookBadge from './BookBadge';

interface Props {
  book: IBook;
}

const BookDetailsTable: React.FC<Props> = ({ book }) => {
  const { title, description, author, user, rent, category, image } = book;

  return (
    <Table>
      <tbody>
        {rent && (
          <tr>
            <td>Days left with the Book</td>
            <td>
              <b>{rent.daysLeft} days</b>
            </td>
          </tr>
        )}
        <tr>
          <td>Image</td>
          <td>
            <img src={image} alt={title} height={300} />
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>
            <b>{title}</b>
          </td>
        </tr>
        <tr>
          <td>Description</td>
          <td>
            <b>{description}</b>
          </td>
        </tr>
        <tr>
          <td>Author</td>
          <td>
            <b>{author}</b>
          </td>
        </tr>
        <tr>
          <td>Category</td>
          <td>
            <b>{category && category.title}</b>
          </td>
        </tr>
        <tr>
          <td>Owner</td>
          <td>
            <b>{user.name}</b>
          </td>
        </tr>
        <tr>
          <td>Status</td>
          <td>
            <b>
              <BookBadge status={rent ? rent.status : 'Returned'} />
            </b>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BookDetailsTable;
