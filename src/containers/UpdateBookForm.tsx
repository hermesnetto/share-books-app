import * as React from 'react';
import { Mutation, Query } from 'react-apollo';
import { toast } from 'react-toastify';
import { Alert } from 'pipestyle';
import BookFormBase from './BookFormBase';
import { UPDATE_BOOK } from '../graphql/mutations';
import { GET_ALL_BOOKS, GET_BOOK } from '../graphql/queries';
import { UpdateBookData, UpdateBookVariables } from '../graphql/types';
import { IBookForm, ID } from '../types';
import { closeModal, setCurrentBook } from '../store/actions';
import { Store } from '../Store';

interface IParams {
  variables: IBookForm;
}

interface IUpdateBook {
  (params: IParams): void;
}

interface ICloseModal {
  (): void;
}

interface Props {
  bookId: ID;
}

const handleUpdateBook = (
  updateBook: IUpdateBook,
  closeBookModal: ICloseModal,
  bookId: ID
) => async (fields: IBookForm) => {
  try {
    await updateBook({ variables: { ...fields, id: bookId } });
    closeBookModal();
    toast(<Alert type="success" icon="check" message="Book successfully updated!" />);
  } catch (e) {
    toast(<Alert type="danger" icon="alert" message={e.message} />);
  }
};

const CreateBookForm: React.FC<Props> = ({ bookId }) => {
  const { dispatch } = React.useContext(Store);
  const closeBookModal = (): void => {
    dispatch(setCurrentBook(null));
    dispatch(closeModal('book'));
  };

  const refetchBooks = {
    query: GET_ALL_BOOKS,
    variables: {}
  };

  const refetchCurrentBook = {
    query: GET_BOOK,
    variables: { id: bookId }
  };

  return (
    <Mutation<UpdateBookData, UpdateBookVariables>
      mutation={UPDATE_BOOK}
      refetchQueries={[refetchBooks, refetchCurrentBook]}
    >
      {(updateBook, { loading: savingBook }) => (
        <Query query={GET_BOOK} variables={{ id: bookId }}>
          {({ data, loading: fetchingBook, error }) => {
            if (fetchingBook) return null;
            if (error) return null;
            if ((!fetchingBook && !data) || (!fetchingBook && !data.book)) return null;

            return (
              <BookFormBase
                mutate={handleUpdateBook(updateBook, closeBookModal, bookId)}
                savingBook={savingBook}
                fetchingBook={fetchingBook}
                currentBook={data.book}
              />
            );
          }}
        </Query>
      )}
    </Mutation>
  );
};

export default CreateBookForm;
