import {Types} from './types';

export interface GetUsersSuccessAction {
  type: typeof Types.GET_USERS_SUCCESS;
  payload: {
    items: Item[];
  };
}

export interface GetUserErrorAction {
  type: typeof Types.USER_ERROR;
  payload: {
    error: string;
  };
}

export interface CreateUserRequestAction {
  type: typeof Types.CREATE_USER_REQUEST;
  payload: {
    firstName: string;
    lastName: string;
  };
}

interface DeleteUserRequestAction {
  type: typeof Types.DELETE_USER_REQUEST;
  payload: {
    userId: number;
  };
}

export type UsersActionTypes =
  | GetUsersSuccessAction
  | GetUserErrorAction
  | CreateUserRequestAction;
export interface Item {
  id: number;
  firstName: string;
  lastName: string;
}

export interface usersState {
  items: Item[];
  error: string;
}

export const getUsersRequest = () => {
  return {
    type: Types.GET_USERS_REQUEST,
  };
};

export const getUsersSuccess = ({items}) => {
  return {
    type: Types.GET_USERS_SUCCESS,
    payload: {
      items,
    },
  };
};

export const userError = ({error}) => {
  return {
    type: Types.USER_ERROR,
    payload: {
      error,
    },
  };
};
