import * as React from 'react';
import BookForm from '../components/BookForm';
import { Store } from '../Store';
import { hideBooksForm } from '../store/actions';
import { IBookForm } from '../types';

interface Props {
  mutate: (fields: IBookForm) => Promise<void>;
  loading: boolean;
}

const emptyBook = {
  title: '',
  description: '',
  author: '',
  image: '',
  publisher: '',
  publicationDate: ''
};

const BookFormBase: React.SFC<Props> = ({ mutate, loading }) => {
  const [fields, setFieldValue] = React.useState<IBookForm>(emptyBook);
  const { dispatch } = React.useContext(Store);

  const handleClose = (): void => dispatch(hideBooksForm());

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFieldValue({ ...fields, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    mutate(fields);
  };

  return (
    <BookForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      onClose={handleClose}
      fields={fields}
      loading={loading}
    />
  );
};

export default BookFormBase;
