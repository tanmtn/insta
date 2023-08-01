import { makeVar } from '@apollo/client';

export const isUserLoggedIn = makeVar(false);

export const userLoggedIn = () => {
    // localStorage.setItem(ACCESS_TOKEN, data.access);
    // localStorage.setItem(REFRESH_TOKEN, data.refresh);

    isUserLoggedIn(true);
};

export const userLoggedOut = () => {
    // localStorage.removeItem(ACCESS_TOKEN);
    // localStorage.removeItem(REFRESH_TOKEN);
    // localStorage.clear();

    isUserLoggedIn(false);
};
