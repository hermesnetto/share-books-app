import * as React from 'react';
import { Timeline } from 'pipestyle';
import { IRent } from '../types';

interface Props {
  rents: IRent[];
  bookTitle: string;
}

const BookRentHistory: React.FC<Props> = ({ rents, bookTitle }) => (
  <>
    <hr />
    <Timeline>
      {rents.map(({ id, user }) => (
        <Timeline.Item
          key={id}
          title={`${user.name} has rented ${bookTitle}`}
          date={''}
          icon={'pp-ico-lock'}
          color={'purple'}
        />
      ))}
    </Timeline>
  </>
);

export default BookRentHistory;
