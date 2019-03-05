import * as React from 'react';
import { Badge } from 'pipestyle';

import { RentStatus } from '../types';

interface Props {
  status: RentStatus;
}

interface Status {
  Available: string;
  Expired: string;
  Rented: string;
  [key: string]: string;
}

const themes: Status = {
  Available: 'info',
  Expired: 'warning',
  Rented: 'danger'
};

const labels: Status = {
  Available: 'Available',
  Expired: 'Waiting Devolution',
  Rented: 'Unavailable'
};

const BookBadge: React.FC<Props> = ({ status }) => {
  const label: string = labels[status] || labels.Available;
  const theme: string = themes[status] || themes.Available;

  return <Badge theme={theme}>{label}</Badge>;
};

export default BookBadge;
