import * as React from 'react';
import { setCurrentBook, openModal } from '../store/actions';
import { Store } from '../Store';
import { ID } from '../types';

export interface IOnClickFn {
  (e: React.SyntheticEvent<HTMLAnchorElement>): void;
}

interface Props {
  bookId: ID;
  render: (onClick: IOnClickFn) => React.ReactElement;
}

const EditBookTrigger: React.FC<Props> = ({ render, bookId }) => {
  const { dispatch } = React.useContext(Store);

  const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    dispatch(setCurrentBook(bookId));
    dispatch(openModal('book'));
  };

  return <>{render(handleClick)}</>;
};

export default EditBookTrigger;
