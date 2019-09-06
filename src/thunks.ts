import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { AppState } from './store/types';
import { itemsIsLoading, itemsHasErrored, itemsFetchDataSuccess } from './store/actions/items';

export const itemsFetchData = (url: string): ThunkAction<void, AppState, void, Action<string>> =>
  (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
