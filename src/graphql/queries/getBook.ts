import gql from 'graphql-tag';

export default gql`
  query getBook($id: ID) {
    book(id: $id) {
      id
      title
      author
      description
      image
      rent {
        id
        status
        userId
        dueDate
        daysLeft
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
