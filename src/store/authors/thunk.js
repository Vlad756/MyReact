import { addAuthor } from '../../services';
import { authorAdded } from './actionCreators';

export const uploadAuthor = (author) => async (dispatch, getState) => {
	const response = await addAuthor(author);
	if (response?.successful) {
		dispatch(authorAdded(response.result));
	}
};
