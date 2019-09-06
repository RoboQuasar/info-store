import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";

import { ListItemsState } from './types';

interface AppProps {
  listItems: ListItemsState;
}

export default function configureStore(initialState: AppProps) {
  const middlewares = [thunk];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleWareEnhancer)
  );
}
