import { OPEN_MODAL, CLOSE_MODAL, SET_CURRENT_USER, SET_CURRENT_BOOK, Action } from './actions';
import { ID } from '../types';

export type ModalType = 'book' | 'category';
export interface State {
  modals: {
    book: {
      isOpened: boolean;
      currentBookId: ID | null;
    };
    category: {
      isOpened: boolean;
    };
    [index: string]: any;
  };
  currentUserId: ID | null;
}

export const initialState: State = {
  modals: {
    book: {
      isOpened: false,
      currentBookId: null
    },
    category: {
      isOpened: false
    }
  },
  currentUserId: null
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      const { key } = action.payload;
      return {
        ...state,
        modals: {
          ...state.modals,
          [key]: { ...state.modals[key], isOpened: true }
        }
      };
    }

    case CLOSE_MODAL: {
      const { key } = action.payload;
      return {
        ...state,
        modals: {
          ...state.modals,
          [key]: { ...state.modals[key], isOpened: false }
        }
      };
    }

    case SET_CURRENT_USER:
      return { ...state, currentUserId: action.payload.id };

    case SET_CURRENT_BOOK:
      return {
        ...state,
        modals: {
          ...state.modals,
          book: { ...state.modals.book, currentBookId: action.payload.id }
        }
      };

    default:
      return state;
  }
};

export default reducer;
