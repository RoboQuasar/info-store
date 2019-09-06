import { combineReducers } from 'redux';

import { isLoadingType, hasErroredType, ListItem, ActionType } from '../types';

export function hasErrored(state: hasErroredType = false, action: ActionType) {
  switch (action.type) {
    case 'ITEMS_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function isLoading(state: isLoadingType = false, action: ActionType) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function items(state:ListItem[] = [], action: ActionType):ListItem[] {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items;

    default:
      return state;
  }
}

export const listItemsReducer = combineReducers({
  items,
  hasErrored,
  isLoading
});
