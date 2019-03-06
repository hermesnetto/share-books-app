import gql from 'graphql-tag';

export default gql`
  mutation returnBook($rentId: ID) {
    returnBook(rentId: $rentId) {
      id
    }
  }
`;
