import * as React from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_CATEGORIES } from '../graphql/queries';
import BookForm from '../components/BookForm';
import { Store } from '../Store';
import { closeModal, setCurrentBook } from '../store/actions';
import { IBook, IBookForm } from '../types';

interface Props {
  mutate: (fields: IBookForm) => Promise<void>;
  savingBook?: boolean;
  fetchingBook?: boolean;
  currentBook?: IBook;
}

const emptyBook = {
  title: '',
  description: '',
  author: '',
  image: '',
  publisher: '',
  publicationDate: '',
  category: ''
};

const BookFormBase: React.SFC<Props> = ({ mutate, savingBook, fetchingBook, currentBook }) => {
  const [fields, setFieldValue] = React.useState<IBookForm>(emptyBook);
  const { dispatch } = React.useContext(Store);

  React.useEffect(() => {
    if (currentBook) {
      const {
        title,
        description,
        category,
        author,
        image,
        publisher,
        publicationDate
      } = currentBook;

      setFieldValue({
        title,
        description,
        category: category ? category.id : '',
        author,
        image,
        publisher,
        publicationDate
      });
    }
  }, []);

  const handleClose = (): void => {
    dispatch(closeModal('book'));
    dispatch(setCurrentBook(null));
  };

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFieldValue({ ...fields, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    mutate(fields);
  };

  return (
    <Query query={GET_ALL_CATEGORIES}>
      {({ data, loading: categoryLoading }) => {
        if (categoryLoading) return null;

        return (
          <BookForm
            onSubmit={handleSubmit}
            onChange={handleChange}
            onClose={handleClose}
            fields={fields}
            categories={data.categories}
            savingBook={savingBook}
            fetchingBook={fetchingBook}
          />
        );
      }}
    </Query>
  );
};

export default BookFormBase;
