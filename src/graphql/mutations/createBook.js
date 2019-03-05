import gql from 'graphql-tag';

export default gql`
  mutation createBook($title: String) {
    createBook(title: $title) {
      id
      title
      author
      rent {
        id
        status
      }
      user {
        id
        name
      }
    }
  }
`;
