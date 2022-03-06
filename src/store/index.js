import { combineReducers, createStore, applyMiddleware } from 'redux';
import { authorReducer } from './authors/reducer';
import { courseReducer } from './courses/reducer';
import { userReducer } from './user/reducer';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
	authors: authorReducer,
	courses: courseReducer,
	user: userReducer,
});

export const middleware = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
