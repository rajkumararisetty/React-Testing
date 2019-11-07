import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middleWares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);

export const store = createStoreWithMiddleware(rootReducer);
