import { ID } from '../types';
import { ModalType } from './reducer';

export const OPEN_MODAL = 'SHARE_BOOKS/OPEN_MODAL';
export const CLOSE_MODAL = 'SHARE_BOOKS/CLOSE_MODAL';
export const SET_CURRENT_USER = 'SHARE_BOOKS/SET_CURRENT_USER';
export const SET_CURRENT_BOOK = 'SHARE_BOOKS/SET_CURRENT_BOOK';

export type OpenModalAction = { type: typeof OPEN_MODAL; payload: { key: string } };
export type CloseModalAction = { type: typeof CLOSE_MODAL; payload: { key: string } };
export type SetCurrentUserAction = { type: typeof SET_CURRENT_USER; payload: { id: ID } };
export type SetCurrentBookAction = { type: typeof SET_CURRENT_BOOK; payload: { id: ID | null } };

export type Action =
  | OpenModalAction
  | CloseModalAction
  | SetCurrentUserAction
  | SetCurrentBookAction;

export const openModal = (key: ModalType): OpenModalAction => ({
  type: OPEN_MODAL,
  payload: { key }
});
export const closeModal = (key: ModalType): CloseModalAction => ({
  type: CLOSE_MODAL,
  payload: { key }
});
export const setCurrentUser = (id: ID): SetCurrentUserAction => ({
  type: SET_CURRENT_USER,
  payload: { id }
});

export const setCurrentBook = (id: ID | null): SetCurrentBookAction => ({
  type: SET_CURRENT_BOOK,
  payload: { id }
});
