import {
	USER_EMAIL_KEY_NAME,
	USER_NAME_KEY_NAME,
	USER_TOKEN_KEY_NAME,
} from '../../constants';
import { getCurrentUser, loginRequest, logoutRequest } from '../../services';
import { setCurrentUserRole, userLogout, userSet } from './actionCreators';

export const logoutThunk = () => async (dispatch, getState) => {
	const { user } = getState();
	const { token } = user;
	await logoutRequest(token);
	window.localStorage.removeItem(USER_NAME_KEY_NAME);
	window.localStorage.removeItem(USER_EMAIL_KEY_NAME);
	window.localStorage.removeItem(USER_TOKEN_KEY_NAME);
	dispatch(userLogout());
};

export const fetchUserThunk = () => async (dispatch, getState) => {
	const { user } = getState();
	const { token } = user;
	const response = await getCurrentUser(token);
	if (response?.successful) {
		dispatch(setCurrentUserRole(response.result.role));
	}
};

export const loginThunk = (user) => async (dispatch) => {
	const response = await loginRequest(user);
	if (response.successful === true) {
		window.localStorage.setItem(USER_TOKEN_KEY_NAME, response.result);
		window.localStorage.setItem(USER_NAME_KEY_NAME, response.user.name);
		window.localStorage.setItem(USER_EMAIL_KEY_NAME, response.user.email);
		dispatch(
			userSet(true, response.user.name, response.user.email, response.result)
		);
		dispatch(fetchUserThunk());
	}
};
