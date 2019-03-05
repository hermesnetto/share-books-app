export const TOKEN_NAME = 'userToken';
export const getToken = (): string | null => localStorage.getItem(TOKEN_NAME);
export const setToken = (token: string): void => localStorage.setItem(TOKEN_NAME, token);
