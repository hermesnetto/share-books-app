import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getToken } from './utils/userToken';

const token = getToken();

const cache = new InMemoryCache();

const request = operation => {
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });
};

const client = new ApolloClient({
  uri: 'http://localhost:4000/api',
  request,
  cache
});

export default client;
