import {combineReducers} from 'redux';
import {usersReducer} from './users';
import {usersState} from '../actions/users';

export interface StoreState {
  users: usersState;
}
export default combineReducers<StoreState>({
  users: usersReducer,
});
