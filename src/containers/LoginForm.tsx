import * as React from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Alert } from 'pipestyle';
import LoginForm from '../components/LoginForm';
import { LOGIN } from '../graphql/mutations';
import { LoginData, LoginVariables } from '../graphql/types';
import { setToken } from '../utils/userToken';

interface Props {}

type ChangeFn = (value: string) => void;
type ChangeEvt = React.SyntheticEvent<HTMLInputElement>;

const LoginFormContainer: React.FC<Props> = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleChange = (changeFn: ChangeFn) => (e: ChangeEvt) => changeFn(e.currentTarget.value);

  return (
    <Mutation<LoginData, LoginVariables> mutation={LOGIN}>
      {(login, { error, data }) => {
        if (error) {
          toast(<Alert type="danger" icon="alert" message={error.message} />);
        }

        if (data) {
          setToken(data.authorize.token);
          toast(<Alert type="success" icon="check" message="User successfully logged in!" />);
          return <Redirect to="/" />;
        }

        return (
          <LoginForm
            email={email}
            password={password}
            setEmail={handleChange(setEmail)}
            setPassword={handleChange(setPassword)}
            onSubmit={(e: React.SyntheticEvent<HTMLFormElement>): void => {
              e.preventDefault();
              login({ variables: { email, password } });
            }}
          />
        );
      }}
    </Mutation>
  );
};

export default LoginFormContainer;
