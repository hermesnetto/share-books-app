import gql from 'graphql-tag';

export default gql`
  mutation login($email: String, $password: String) {
    authorize(email: $email, password: $password) {
      token
    }
  }
`;
