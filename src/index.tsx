import * as React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import client from './client';
import * as serviceWorker from './serviceWorker';
import AppRouter from './components/AppRouter';
import { Provider } from './Store';

ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
