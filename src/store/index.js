import { combineReducers, createStore } from 'redux';
import { authorReducer } from './authors/reducer';
import { courseReducer } from './courses/reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
	authors: authorReducer,
	courses: courseReducer,
	user: userReducer,
});

export const store = createStore(rootReducer);
