import { combineReducers } from 'redux';
import { listItemsReducer } from './items';

export const rootReducer = combineReducers({
  listItems: listItemsReducer,
});
