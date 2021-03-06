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

export interface GetUserRequestAction {
  type: typeof Types.GET_USERS_REQUEST;
  payload: {
    loading: boolean;
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
  | CreateUserRequestAction
  | GetUserRequestAction;

export interface Item {
  id: number;
  firstName: string;
  lastName: string;
}

export interface usersState {
  items: Item[];
  error: string;
  loading: boolean;
}

export const getUsersRequest = () => {
  return {
    type: Types.GET_USERS_REQUEST,
  };
};

export const getUsersSuccess = ({
  items,
}: {
  items: Item[];
}): GetUsersSuccessAction => {
  return {
    type: Types.GET_USERS_SUCCESS,
    payload: {
      items,
    },
  };
};

export const createUserRequest = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): CreateUserRequestAction => {
  return {
    type: Types.CREATE_USER_REQUEST,
    payload: {
      firstName,
      lastName,
    },
  };
};

export const deleteUserRequest = (userId: number) => {
  return {
    type: Types.DELETE_USER_REQUEST,
    payload: {
      userId,
    },
  };
};

export const userError = ({error}: {error: string}): GetUserErrorAction => {
  return {
    type: Types.USER_ERROR,
    payload: {
      error,
    },
  };
};
