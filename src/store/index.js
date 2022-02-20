import { combineReducers } from 'redux';
import { authorReducer } from './authors/reducer';
import { courseReducer } from './courses/reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
	author: authorReducer,
	course: courseReducer,
	user: userReducer,
});
