import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import CreateBookForm from '../containers/CreateBookForm';
import UpdateBookForm from '../containers/UpdateBookForm';
import CreateCategoryForm from '../containers/CreateCategoryForm';
import PageHeader from './PageHeader';
import Page from '../containers/Page';
import { Store } from '../Store';
import 'react-toastify/dist/ReactToastify.css';

interface Props {}

const PageLayout: React.FC<Props> = ({ children }) => {
  const {
    state: {
      modals: { book, category }
    }
  } = React.useContext(Store);

  return (
    <Page>
      <PageHeader />
      <main>{children}</main>
      <ToastContainer />
      {book.isOpened && !book.currentBookId && <CreateBookForm />}
      {book.isOpened && book.currentBookId && <UpdateBookForm bookId={book.currentBookId} />}
      {category.isOpened && <CreateCategoryForm />}
    </Page>
  );
};

export default PageLayout;
