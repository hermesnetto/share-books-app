import * as React from 'react';
import { Query } from 'react-apollo';

import BooksList from '../components/BooksList';
import BooksListLoading from '../components/BooksListLoading';
import { GET_ALL_BOOKS } from '../graphql/queries';

const BooksListContainer = () => (
  <Query query={GET_ALL_BOOKS}>
    {({ data, loading, error }) => {
      if (loading) return <BooksListLoading />;
      if (error) return <p>Error</p>;

      return <BooksList books={data.books} />;
    }}
  </Query>
);

export default BooksListContainer;
