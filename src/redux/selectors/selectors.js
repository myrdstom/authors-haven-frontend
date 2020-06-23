import { createSelector } from 'reselect';

// Profile selector
const selectProfile = state => state.profile;

export const selectProfileItems = createSelector(
    [selectProfile],
    profile => profile
);

export const selectCurrentProfile = createSelector(
    [selectProfileItems],
    profile => profile
);


// user selector

const selectUser = state => state.auth;

export const selectCurrentUser = createSelector(
    [selectUser],
    (auth) => auth
)