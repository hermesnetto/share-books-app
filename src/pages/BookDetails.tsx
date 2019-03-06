import * as React from 'react';
import { Helmet } from 'react-helmet';

import BookDetails from '../containers/BookDetails';
import { Container } from '../styled';
import { RouteComponentProps } from 'react-router-dom';

interface MatchProps {
  id: string;
}

interface Props extends RouteComponentProps<MatchProps> {}

const BookDetailsPage: React.FC<Props> = ({
  match: {
    params: { id }
  }
}) => (
  <>
    <Helmet>
      <title>Book - Share Books</title>
    </Helmet>
    <Container>
      <BookDetails bookId={id} />
    </Container>
  </>
);

export default BookDetailsPage;
