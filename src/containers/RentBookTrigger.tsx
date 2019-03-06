import * as React from 'react';
import { Mutation } from 'react-apollo';
import { toast } from 'react-toastify';
import { Alert } from 'pipestyle';
import { RENT_BOOK } from '../graphql/mutations';
import { GET_BOOK } from '../graphql/queries';
import { RentBookData, RentBookVariables } from '../graphql/types';
import { ID } from '../types';

export interface IOnClickFn {
  (): void;
}

interface Props {
  bookId: ID;
  render: (onClick: IOnClickFn, loading: boolean) => React.ReactElement;
}

const RentBookTrigger: React.FC<Props> = ({ render, bookId }) => {
  const refetchBook = {
    query: GET_BOOK,
    variables: { id: bookId }
  };

  return (
    <Mutation<RentBookData, RentBookVariables> mutation={RENT_BOOK} refetchQueries={[refetchBook]}>
      {(rentBook, { error, data, loading }) => {
        if (error) {
          toast(<Alert type="danger" icon="alert" message="Error" />);
        }

        if (data) {
          toast(<Alert type="success" icon="check" message="Book successfully rented!" />);
        }

        return <>{render(() => rentBook({ variables: { bookId } }), loading)}</>;
      }}
    </Mutation>
  );
};

export default RentBookTrigger;
