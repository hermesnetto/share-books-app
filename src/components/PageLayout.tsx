import * as React from 'react';

import CreateBookForm from '../containers/CreateBookForm';
import PageHeader from './PageHeader';
import { Store } from '../Store';

interface Props {}

const PageLayout: React.FC<Props> = ({ children }) => {
  const { state } = React.useContext(Store);

  return (
    <div>
      <PageHeader />
      <main>{children}</main>
      {state.isBookFormOpened && <CreateBookForm />}
    </div>
  );
};

export default PageLayout;
