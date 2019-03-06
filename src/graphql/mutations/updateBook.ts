import gql from 'graphql-tag';

export default gql`
  mutation updateBook(
    $id: ID!
    $title: String
    $description: String
    $category: ID
    $author: String
    $image: String
  ) {
    updateBook(
      id: $id
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
