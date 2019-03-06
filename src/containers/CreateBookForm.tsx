import * as React from 'react';
import { Mutation } from 'react-apollo';
import { toast } from 'react-toastify';
import { Alert } from 'pipestyle';
import BookFormBase from './BookFormBase';
import { CREATE_BOOK } from '../graphql/mutations';
import { GET_ALL_BOOKS } from '../graphql/queries';
import { CreateBookData, CreateBookVariables } from '../graphql/types';
import { IBookForm } from '../types';
import { closeModal } from '../store/actions';
import { Store } from '../Store';

interface IParams {
  variables: IBookForm;
}

interface ICreateBook {
  (params: IParams): void;
}

interface ICloseModal {
  (): void;
}

interface Props {}

const handleCreateBook = (createBook: ICreateBook, closeBookModal: ICloseModal) => async (
  fields: IBookForm
) => {
  try {
    await createBook({ variables: { ...fields } });
    closeBookModal();
    toast(<Alert type="success" icon="check" message="Book successfully created!" />);
  } catch (e) {
    toast(<Alert type="danger" icon="alert" message={e.message} />);
  }
};

const refetchBooks = {
  query: GET_ALL_BOOKS,
  variables: {}
};

const CreateBookForm: React.FC<Props> = () => {
  const { dispatch } = React.useContext(Store);
  const closeBookModal = (): void => dispatch(closeModal('book'));

  return (
    <Mutation<CreateBookData, CreateBookVariables>
      mutation={CREATE_BOOK}
      refetchQueries={[refetchBooks]}
    >
      {(createBook, { loading }) => (
        <BookFormBase mutate={handleCreateBook(createBook, closeBookModal)} savingBook={loading} />
      )}
    </Mutation>
  );
};

export default CreateBookForm;
