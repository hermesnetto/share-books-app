import * as React from 'react';
import { Mutation } from 'react-apollo';
import { toast } from 'react-toastify';
import { Alert } from 'pipestyle';
import { DELETE_BOOK } from '../graphql/mutations';
import { GET_ALL_BOOKS } from '../graphql/queries';
import { DeleteBookData, DeleteBookVariables } from '../graphql/types';
import { ID } from '../types';

export interface IOnClickFn {
  (e: React.SyntheticEvent<HTMLAnchorElement>): void;
}

interface Props {
  bookId: ID;
  render: (onClick: IOnClickFn, loading: boolean) => React.ReactElement;
}

const refetchBooks = { query: GET_ALL_BOOKS };

const DeleteBookTrigger: React.FC<Props> = ({ render, bookId }) => (
  <Mutation<DeleteBookData, DeleteBookVariables>
    mutation={DELETE_BOOK}
    refetchQueries={[refetchBooks]}
  >
    {(deleteBook, { error, data, loading }) => {
      if (error) {
        toast(<Alert type="danger" icon="alert" message={error.message} />);
      }

      if (data) {
        toast(<Alert type="success" icon="check" message="Book successfully deleted!" />);
      }

      const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        deleteBook({ variables: { id: bookId } });
      };

      return <>{render(handleClick, loading)}</>;
    }}
  </Mutation>
);

export default DeleteBookTrigger;
