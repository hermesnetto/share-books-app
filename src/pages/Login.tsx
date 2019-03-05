import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';

import LoginForm from '../containers/LoginForm';
import { Container } from '../styled';
import { getToken } from '../utils/userToken';

interface Props {}

const Login: React.FC<Props> = () => {
  if (getToken()) return <Redirect to="/" />;

  return (
    <>
      <Helmet>
        <title>Login - Share Books</title>
      </Helmet>
      <Container size="small">
        <LoginForm />
      </Container>
    </>
  );
};

export default Login;
