import * as React from 'react';
import { Query } from 'react-apollo';

import BookRentHistory from '../components/BookRentHistory';
import BooksListLoading from '../components/BooksListLoading';
import { GET_RENTS_BY_BOOK } from '../graphql/queries';

interface Props {
  bookId: number;
  bookTitle: string;
}

const BookRentHistoryContainer: React.FC<Props> = ({ bookId, bookTitle }) => (
  <Query query={GET_RENTS_BY_BOOK} variables={{ bookId }}>
    {({ data, loading, error }) => {
      if (loading) return <BooksListLoading />;
      if (error) return <p>Error</p>;
      if (!data.rents || !data.rents.length) return null;

      return <BookRentHistory rents={data.rents} bookTitle={bookTitle} />;
    }}
  </Query>
);

export default BookRentHistoryContainer;
