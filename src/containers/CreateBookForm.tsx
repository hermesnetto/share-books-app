import * as React from 'react';
import { Mutation } from 'react-apollo';
import BookFormBase from './BookFormBase';
import { CREATE_BOOK } from '../graphql/mutations';
import { GET_ALL_BOOKS } from '../graphql/queries';
import { CreateBookData, CreateBookVariables } from '../graphql/types';
import { IBookForm } from '../types';
import { hideBooksForm } from '../store/actions';
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

const handleCreateBook = (createBook: ICreateBook, closeModal: ICloseModal) => async (
  fields: IBookForm
) => {
  try {
    await createBook({ variables: { ...fields } });
    closeModal();
  } catch (e) {
    alert('Erooooou!!');
  }
};

const refetchBooks = {
  query: GET_ALL_BOOKS,
  variables: {}
};

const CreateBookForm: React.FC<Props> = () => {
  const { dispatch } = React.useContext(Store);
  const closeModal = (): void => dispatch(hideBooksForm());

  return (
    <Mutation<CreateBookData, CreateBookVariables>
      mutation={CREATE_BOOK}
      refetchQueries={[refetchBooks]}
    >
      {(createBook, { loading }) => (
        <BookFormBase mutate={handleCreateBook(createBook, closeModal)} loading={loading} />
      )}
    </Mutation>
  );
};

export default CreateBookForm;
