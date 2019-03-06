import gql from 'graphql-tag';

export default gql`
  mutation createCategory($title: String) {
    createCategory(title: $title) {
      id
    }
  }
`;
