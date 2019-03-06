import gql from 'graphql-tag';

export default gql`
  mutation rentBook($bookId: ID) {
    rentBook(bookId: $bookId) {
      id
      status
    }
  }
`;
