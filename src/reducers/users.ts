import {Types, usersState, UsersActionTypes} from '../actions';

const INITIAL_STATE = {
  items: [],
  error: '',
  loading: false,
};

export const usersReducer = (
  state: usersState = INITIAL_STATE,
  action: UsersActionTypes,
): usersState => {
  switch (action.type) {
    case Types.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        loading: false,
      };
    case Types.USER_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};
