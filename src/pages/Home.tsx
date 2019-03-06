import * as React from 'react';
import { Helmet } from 'react-helmet';

import BooksList from '../containers/BooksList';
import { Container } from '../styled';

interface Props {}

const HomePage: React.FC<Props> = () => (
  <>
    <Helmet>
      <title>Home - Share Books</title>
    </Helmet>
    <Container>
      <BooksList />
    </Container>
  </>
);

export default HomePage;
