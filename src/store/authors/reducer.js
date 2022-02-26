import * as actions from './actionTypes';

export const authorReducer = (state = [], action) => {
	switch (action.type) {
		case actions.AUTHOR_ADDED:
			return [...state, action.payload];
		case actions.AUTHOR_REMOVED:
			return state.filter((author) => author.id !== action.payload);
		case actions.AUTHORS_SET_ALL:
			return action.payload;
		default:
			return state;
	}
};
