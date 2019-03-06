import * as React from 'react';
import { Query } from 'react-apollo';
import { GET_CURRENT_USER } from '../graphql/queries';
import { Store } from '../Store';
import { setCurrentUser } from '../store/actions';
import { ID } from '../types';

interface Props {}
interface Props2 {
  currentUserId: ID;
}

const PageRender: React.FC<Props2> = ({ currentUserId, children }) => {
  const { dispatch } = React.useContext(Store);

  React.useEffect(() => {
    dispatch(setCurrentUser(currentUserId));
  }, []);

  return <>{children}</>;
};

const Page: React.FC<Props> = ({ children }) => (
  <Query query={GET_CURRENT_USER}>
    {({ loading, data }) => {
      if (loading) return null;
      if (!data.me) return children;

      return <PageRender currentUserId={data.me.id}>{children}</PageRender>;
    }}
  </Query>
);

export default Page;
