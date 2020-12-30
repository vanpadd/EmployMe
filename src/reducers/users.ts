import {Types} from '../actions';

const INITIAL_STATE = {
  items: [],
  error: '',
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
      };
    case Types.USER_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
