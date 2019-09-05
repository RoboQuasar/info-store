type ActionsTypes = {
  type: 'ITEMS_HAS_ERRORED';
  hasErrored: boolean;
} | {
  type: 'ITEMS_IS_LOADING',
  isLoading: boolean;
} | {
  type: 'ITEMS_FETCH_DATA_SUCCESS';
  items: { id: string; label: string; };
};

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

export const itemsFetchDataSuccess = (items: { id: string; label: string; }):ActionsTypes => ({
  type: inferStringLiteral('ITEMS_FETCH_DATA_SUCCESS'),
  items
});

