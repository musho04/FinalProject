import {createSelector } from "reselect";

export const selectUserList = (state) => {
    return state.user.data;
}

export const selecterUser = createSelector(
    selectUserList,
    (data) => data
)
