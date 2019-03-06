import * as React from 'react';
import { Query } from 'react-apollo';
import BooksList from '../components/BooksList';
import BooksEmptyState from '../components/BooksEmptyState';
import BooksListLoading from '../components/BooksListLoading';
import { GET_ALL_BOOKS } from '../graphql/queries';
import { Store } from '../Store';

const BooksListContainer = () => {
  const { state } = React.useContext(Store);

  return (
    <Query query={GET_ALL_BOOKS}>
      {({ data, loading, error }) => {
        if (loading) return <BooksListLoading />;
        if (error) return <p>Error</p>;
        if (!data.books.length) return <BooksEmptyState />;

        return <BooksList books={data.books} currentUserId={state.currentUserId} />;
      }}
    </Query>
  );
};

export default BooksListContainer;
