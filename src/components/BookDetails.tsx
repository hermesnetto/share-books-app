import * as React from 'react';
import { Button } from 'pipestyle';
import { IBook, ID } from '../types';
import { PageHeader } from '../styled';
import RentBookTrigger, { IOnClickFn } from '../containers/RentBookTrigger';
import ReturnBookTrigger from '../containers/ReturnBookTrigger';
import BookDetailsTable from './BookDetailsTable';

interface Props {
  book: IBook;
  currentUserId: ID | null;
}

const BookDetails: React.FC<Props> = ({ book, currentUserId }) => {
  const { id, rent } = book;
  const canRent =
    (currentUserId && rent && rent.userId === currentUserId) || (!rent && currentUserId);

  return (
    <>
      <PageHeader>
        <h2>
          <b>{book.title}</b>
        </h2>
        {canRent && (
          <>
            {rent ? (
              <ReturnBookTrigger
                bookId={id}
                rentId={rent.id}
                render={(onClick: IOnClickFn, loading: boolean) => (
                  <Button theme="primary" size="sm" onClick={onClick} disabled={loading}>
                    Return Book
                  </Button>
                )}
              />
            ) : (
              <RentBookTrigger
                bookId={id}
                render={(onClick: IOnClickFn, loading: boolean) => (
                  <Button theme="primary" size="sm" onClick={onClick} disabled={loading}>
                    Get Book
                  </Button>
                )}
              />
            )}
          </>
        )}
      </PageHeader>

      <BookDetailsTable book={book} />
    </>
  );
};

export default BookDetails;
