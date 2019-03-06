import gql from 'graphql-tag';

export default gql`
  query getRentsByBook($bookId: ID) {
    rents(bookId: $bookId) {
      id
      status
      user {
        name
      }
    }
  }
`;
