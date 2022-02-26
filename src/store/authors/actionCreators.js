import * as actions from './actionTypes';

export const authorAdded = (author) => {
	return {
		type: actions.AUTHOR_ADDED,
		payload: author,
	};
};

export const authorRemoved = (id) => ({
	type: actions.AUTHOR_REMOVED,
	payload: id,
});

export const setAuthors = (authors) => ({
	type: actions.AUTHORS_SET_ALL,
	payload: authors,
});
