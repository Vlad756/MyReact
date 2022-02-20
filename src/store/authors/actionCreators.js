import * as actions from './actionTypes';

export const authorAdded = (author) => {
	return {
		type: actions.AUTHOR_ADDED,
		payload: { author: author },
	};
};

export const authorRemoved = (id) => ({
	type: actions.AUTHOR_REMOVED,
	payload: {
		id: id,
	},
});

export const setAuthors = (arr) => ({
	type: actions.AUTHORS_SET_ALL,
	payload: {
		authors: arr,
	},
});
