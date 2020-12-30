import {Types} from '.';

export const getUsersRequest = () => {
  return {
    type: Types.GET_USERS_REQUEST,
  };
};

export const getUsersSuccess = () => {
  return {
    type: Types.GET_USERS_SUCCESS,
    payload: {
      items,
    },
  };
};

export const userError = () => {
  return {
    type: Types.USER_ERROR,
    payload: {
      error,
    },
  };
};
