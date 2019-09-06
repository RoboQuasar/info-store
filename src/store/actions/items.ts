import { ActionsTypes, ListItem } from '../types';

function inferLiteral<U, T extends U>(value: T): T {
  return value;
}

function inferStringLiteral<T extends string>(value: T): T {
  return inferLiteral(value);
}

export const itemsHasErrored = (bool: boolean):ActionsTypes => ({
  type: inferStringLiteral('ITEMS_HAS_ERRORED'),
  hasErrored: bool
});

export const itemsIsLoading = (bool: boolean):ActionsTypes => ({
  type: inferStringLiteral('ITEMS_IS_LOADING'),
  isLoading: bool
});

export const itemsFetchDataSuccess = (items: ListItem[]):ActionsTypes => ({
  type: inferStringLiteral('ITEMS_FETCH_DATA_SUCCESS'),
  items
});
