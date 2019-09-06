import { rootReducer } from './reducers';
import * as actions from './actions/items';


type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type ActionType = ReturnType<InferValueTypes<typeof actions>>

export interface ListItem {
  id: string,
  label: string
};

export type isLoadingType = boolean;
export type hasErroredType = boolean;

export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';

export type ActionsTypes = {
  type: typeof ITEMS_HAS_ERRORED;
  hasErrored: boolean;
} | {
  type: typeof ITEMS_IS_LOADING,
  isLoading: boolean;
} | {
  type: typeof ITEMS_FETCH_DATA_SUCCESS;
  items: { id: string; label: string; }[];
};

export interface ListItemsState {
  items: ListItem[];
  isLoading: isLoadingType;
  hasErrored: hasErroredType;
}

export type AppState = ReturnType<typeof rootReducer>;
