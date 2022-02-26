import * as actions from './actionTypes';

export const login = (email, password) => ({
	type: actions.USER_LOGIN,
	payload: {
		email: email,
		password: password,
	},
});

export const logout = () => ({
	type: actions.USER_LOGOUT,
});

export const setUserStore = (isAuth, name, email, token) => ({
	type: actions.SET_USER_STORE,
	payload: {
		isAuth: isAuth,
		name: name,
		email: email,
		token: token,
	},
});
