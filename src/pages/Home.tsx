import * as React from 'react';
import { Helmet } from 'react-helmet';

import BooksList from '../containers/BooksList';
import { Container } from '../styled';

interface Props {}

const Home: React.FC<Props> = () => (
  <>
    <Helmet>
      <title>Home - Share Books</title>
    </Helmet>
    <Container>
      <BooksList />
    </Container>
  </>
);

export default Home;
