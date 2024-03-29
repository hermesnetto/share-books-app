import gql from 'graphql-tag';

export default gql`
  {
    books {
      id
      title
      author
      rent {
        id
        status
        userId
      }
      user {
        id
        name
      }
      category {
        title
      }
    }
  }
`;
