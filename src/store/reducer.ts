import { SHOW_BOOKS_FORM, HIDE_BOOKS_FORM, Action } from './actions';

export interface State {
  isBookFormOpened: boolean;
}

export const initialState: State = {
  isBookFormOpened: false
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case SHOW_BOOKS_FORM:
      return { ...state, isBookFormOpened: true };

    case HIDE_BOOKS_FORM:
      return { ...state, isBookFormOpened: false };

    default:
      return state;
  }
};

export default reducer;
