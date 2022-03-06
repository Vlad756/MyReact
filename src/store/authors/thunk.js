import { addAuthor, fetchAuthors } from '../../services';
import { authorAdded, setAuthors } from './actionCreators';

export const uploadAuthorThunk = (author) => async (dispatch, getState) => {
	const { user } = getState();
	const { token } = user;
	const response = await addAuthor(author, token);
	if (response?.successful) {
		dispatch(authorAdded(response.result));
	}
};

export const fetchAuthorsThunk = () => async (dispatch, getState) => {
	const { authors } = getState();
	if (!authors.length) {
		fetchAuthors().then((data) => {
			if (data && data.successful) {
				dispatch(setAuthors(data.result));
			}
		});
	}
};
