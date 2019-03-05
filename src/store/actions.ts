export const SHOW_BOOKS_FORM = 'SHARE_BOOKS/SHOW_BOOKS_FORM';
export const HIDE_BOOKS_FORM = 'SHARE_BOOKS/HIDE_BOOKS_FORM';

export const showBooksForm = () => ({ type: SHOW_BOOKS_FORM });
export const hideBooksForm = () => ({ type: HIDE_BOOKS_FORM });

export type ShowBooksFormAction = ReturnType<typeof showBooksForm>;
export type HideBooksFormAction = ReturnType<typeof hideBooksForm>;

export type Action = ShowBooksFormAction | HideBooksFormAction;
