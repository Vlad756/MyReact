import * as actions from './actionTypes';

export const authorAdded = (author) => ({
	type: actions.AUTHOR_ADDED,
	payload: author,
});

export const setAuthors = (authors) => ({
	type: actions.AUTHORS_SET_ALL,
	payload: authors,
});
