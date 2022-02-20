import * as actions from './actionTypes';

export const authorReducer = (state = [], action) => {
	switch (action.type) {
		case actions.AUTHOR_ADDED:
			return [...state, action.payload.author];
		case actions.AUTHOR_REMOVED:
			return state.filter((author) => author.id !== action.payload.id);
		case actions.AUTHORS_SET_ALL:
			return action.payload.authors;
		default:
			return state;
	}
};
