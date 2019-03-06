import * as React from 'react';
import { Query } from 'react-apollo';
import BookDetails from '../components/BookDetails';
import BooksListLoading from '../components/BooksListLoading';
import { GET_BOOK } from '../graphql/queries';
import { Store } from '../Store';

interface Props {
  bookId: string;
}

const BookDetailsContainer: React.FC<Props> = ({ bookId }) => {
  const { state } = React.useContext(Store);

  return (
    <Query query={GET_BOOK} variables={{ id: bookId }}>
      {({ data, loading, error }) => {
        if (loading) return <BooksListLoading />;
        if (error) return <p>Error</p>;

        return <BookDetails book={data.book} currentUserId={state.currentUserId} />;
      }}
    </Query>
  );
};

export default BookDetailsContainer;
