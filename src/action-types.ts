export type ActionsTypes = {
  type: 'ITEMS_HAS_ERRORED';
  hasErrored: boolean;
} | {
  type: 'ITEMS_IS_LOADING',
  isLoading: boolean;
} | {
  type: 'ITEMS_FETCH_DATA_SUCCESS';
  items: { id: string; label: string; };
};
