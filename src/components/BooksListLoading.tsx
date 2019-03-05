import * as React from 'react';
import { FakeLoader } from 'pipestyle';
import { Box } from '../styled';

interface Props {}

const BooksListLoading: React.FC<Props> = () => (
  <Box>
    <FakeLoader>
      <FakeLoader.Item type="photo" />
      <FakeLoader.Item type="half" />
      <FakeLoader.Item type="xs-small" />
      <FakeLoader.Item />
    </FakeLoader>
  </Box>
);

export default BooksListLoading;
