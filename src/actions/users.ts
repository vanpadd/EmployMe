import {Types} from '.';

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
