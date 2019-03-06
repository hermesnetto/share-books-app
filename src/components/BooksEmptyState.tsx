import * as React from 'react';
import { EmptyStates } from 'pipestyle';
import { Box } from '../styled';

interface Props {}

const BooksEmptyState: React.FC<Props> = () => (
  <Box center>
    <EmptyStates
      label="There aren't books yet!"
      src="//d3l2kwhcxt3ou6.cloudfront.net/illustrations/illustration_my_desk.svg"
      alt="My Desk"
    />
  </Box>
);

export default BooksEmptyState;
