import * as React from 'react';
import { BaseField, TextField, Button } from 'pipestyle';
import { Box } from '../styled';

interface Props {
  email: string;
  password: string;
  setEmail: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  setPassword: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<Props> = ({ email, password, setEmail, setPassword, onSubmit }) => (
  <section>
    <Box>
      <h2>Welcome</h2>
      <hr />
      <form onSubmit={onSubmit}>
        <BaseField label="Email">
          <TextField
            type="email"
            placeholder="Your email. e.g: john@mail.com"
            value={email}
            onChange={setEmail}
          />
        </BaseField>
        <BaseField label="Password">
          <TextField type="password" value={password} onChange={setPassword} />
        </BaseField>
        <hr />
        <Button type="submit">Login</Button>
      </form>
    </Box>
  </section>
);

export default LoginForm;
