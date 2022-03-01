import * as actions from './actionTypes';

export const userLogout = () => ({
	type: actions.USER_LOGOUT,
});

export const userSet = (isAuth, name, email, token) => ({
	type: actions.USER_SET,
	payload: {
		isAuth: isAuth,
		name: name,
		email: email,
		token: token,
	},
});

export const setCurrentUserRole = (role) => ({
	type: actions.USER_ROLE_SET,
	payload: role,
});
