import * as actions from '../actions/items';

type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

type ActionType = ReturnType<InferValueTypes<typeof actions>>

export function itemsHasErrored(state = false, action: ActionType) {
  switch (action.type) {
    case 'ITEMS_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action: ActionType) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function items(state = [], action: ActionType) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items;

    default:
      return state;
  }
}
