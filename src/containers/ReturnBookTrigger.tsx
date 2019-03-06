import * as React from 'react';
import { Mutation } from 'react-apollo';
import { toast } from 'react-toastify';
import { Alert } from 'pipestyle';
import { RETURN_BOOK } from '../graphql/mutations';
import { GET_BOOK } from '../graphql/queries';
import { ReturnBookData, ReturnBookVariables } from '../graphql/types';
import { ID } from '../types';

export interface IOnClickFn {
  (): void;
}

interface Props {
  bookId: ID;
  rentId: ID;
  render: (onClick: IOnClickFn, loading: boolean) => React.ReactElement;
}

const ReturnBookTrigger: React.FC<Props> = ({ render, bookId, rentId }) => {
  const refetchBook = {
    query: GET_BOOK,
    variables: { id: bookId }
  };

  return (
    <Mutation<ReturnBookData, ReturnBookVariables>
      mutation={RETURN_BOOK}
      refetchQueries={[refetchBook]}
    >
      {(returnBook, { error, data, loading }) => {
        if (error) {
          toast(<Alert type="danger" icon="alert" message="Error" />);
        }

        if (data) {
          toast(<Alert type="success" icon="check" message="Book successfully returned!" />);
        }

        return <>{render(() => returnBook({ variables: { rentId } }), loading)}</>;
      }}
    </Mutation>
  );
};

export default ReturnBookTrigger;
