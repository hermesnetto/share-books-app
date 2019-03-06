import gql from 'graphql-tag';

export default gql`
  mutation createBook(
    $title: String!
    $description: String
    $category: ID
    $author: String
    $image: String
  ) {
    createBook(
      title: $title
      description: $description
      categoryId: $category
      author: $author
      image: $image
    ) {
      id
    }
  }
`;
