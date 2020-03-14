import ActionTypes from '../constants/ActionTypes';

/* Actions */

export const createUser = data => ({
  type: ActionTypes.USER_CREATE,
  payload: {
    data,
  },
});

export const clearUserCreateError = () => ({
  type: ActionTypes.USER_CREATE_ERROR_CLEAR,
  payload: {},
});

export const updateUser = (id, data) => ({
  type: ActionTypes.USER_UPDATE,
  payload: {
    id,
    data,
  },
});

export const clearUserEmailUpdateError = id => ({
  type: ActionTypes.USER_EMAIL_UPDATE_ERROR_CLEAR,
  payload: {
    id,
  },
});

export const clearUserPasswordUpdateError = id => ({
  type: ActionTypes.USER_PASSWORD_UPDATE_ERROR_CLEAR,
  payload: {
    id,
  },
});

export const deleteUser = id => ({
  type: ActionTypes.USER_DELETE,
  payload: {
    id,
  },
});

export const addUserToCard = (id, cardId, isCurrent) => ({
  type: ActionTypes.USER_TO_CARD_ADD,
  payload: {
    id,
    cardId,
    isCurrent,
  },
});

export const removeUserFromCard = (id, cardId) => ({
  type: ActionTypes.USER_FROM_CARD_REMOVE,
  payload: {
    id,
    cardId,
  },
});

export const addUserToBoardFilter = (id, boardId) => ({
  type: ActionTypes.USER_TO_BOARD_FILTER_ADD,
  payload: {
    id,
    boardId,
  },
});

export const removeUserFromBoardFilter = (id, boardId) => ({
  type: ActionTypes.USER_FROM_BOARD_FILTER_REMOVE,
  payload: {
    id,
    boardId,
  },
});

/* Events */

export const createUserRequested = data => ({
  type: ActionTypes.USER_CREATE_REQUESTED,
  payload: {
    data,
  },
});

export const createUserSucceeded = user => ({
  type: ActionTypes.USER_CREATE_SUCCEEDED,
  payload: {
    user,
  },
});

export const createUserFailed = error => ({
  type: ActionTypes.USER_CREATE_FAILED,
  payload: {
    error,
  },
});

export const createUserReceived = user => ({
  type: ActionTypes.USER_CREATE_RECEIVED,
  payload: {
    user,
  },
});

export const fetchCurrentUserRequested = () => ({
  type: ActionTypes.CURRENT_USER_FETCH_REQUESTED,
  payload: {},
});

export const fetchCurrentUserSucceeded = user => ({
  type: ActionTypes.CURRENT_USER_FETCH_SUCCEEDED,
  payload: {
    user,
  },
});

export const fetchCurrentUserFailed = error => ({
  type: ActionTypes.CURRENT_USER_FETCH_FAILED,
  payload: {
    error,
  },
});

export const updateUserRequested = (id, data) => ({
  type: ActionTypes.USER_UPDATE_REQUESTED,
  payload: {
    id,
    data,
  },
});

export const updateUserSucceeded = user => ({
  type: ActionTypes.USER_UPDATE_SUCCEEDED,
  payload: {
    user,
  },
});

export const updateUserFailed = (id, error) => ({
  type: ActionTypes.USER_UPDATE_FAILED,
  payload: {
    id,
    error,
  },
});

export const updateUserReceived = user => ({
  type: ActionTypes.USER_UPDATE_RECEIVED,
  payload: {
    user,
  },
});

export const updateUserEmailRequested = (id, data) => ({
  type: ActionTypes.USER_EMAIL_UPDATE_REQUESTED,
  payload: {
    id,
    data,
  },
});

export const updateUserEmailSucceeded = (id, email) => ({
  type: ActionTypes.USER_EMAIL_UPDATE_SUCCEEDED,
  payload: {
    id,
    email,
  },
});

export const updateUserEmailFailed = (id, error) => ({
  type: ActionTypes.USER_EMAIL_UPDATE_FAILED,
  payload: {
    id,
    error,
  },
});

export const updateUserPasswordRequested = (id, data) => ({
  type: ActionTypes.USER_PASSWORD_UPDATE_REQUESTED,
  payload: {
    id,
    data,
  },
});

export const updateUserPasswordSucceeded = id => ({
  type: ActionTypes.USER_PASSWORD_UPDATE_SUCCEEDED,
  payload: {
    id,
  },
});

export const updateUserPasswordFailed = (id, error) => ({
  type: ActionTypes.USER_PASSWORD_UPDATE_FAILED,
  payload: {
    id,
    error,
  },
});

export const uploadUserAvatarRequested = id => ({
  type: ActionTypes.USER_AVATAR_UPLOAD_REQUESTED,
  payload: {
    id,
  },
});

export const uploadUserAvatarSucceeded = (id, avatar) => ({
  type: ActionTypes.USER_AVATAR_UPLOAD_SUCCEEDED,
  payload: {
    id,
    avatar,
  },
});

export const uploadUserAvatarFailed = (id, error) => ({
  type: ActionTypes.USER_AVATAR_UPLOAD_FAILED,
  payload: {
    id,
    error,
  },
});

export const deleteUserRequested = id => ({
  type: ActionTypes.USER_DELETE_REQUESTED,
  payload: {
    id,
  },
});

export const deleteUserSucceeded = user => ({
  type: ActionTypes.USER_DELETE_SUCCEEDED,
  payload: {
    user,
  },
});

export const deleteUserFailed = (id, error) => ({
  type: ActionTypes.USER_DELETE_FAILED,
  payload: {
    id,
    error,
  },
});

export const deleteUserReceived = user => ({
  type: ActionTypes.USER_DELETE_RECEIVED,
  payload: {
    user,
  },
});
