import * as actions from './actionTypes';

export const login = (email, password) => ({
	type: actions.LOGOUT,
	payload: {
		email: email,
		password: password,
	},
});

export const logout = () => ({
	type: actions.LOGOUT,
	payload: {},
});

export const register = (name, email, password) => ({
	type: actions.REGISTER,
	payload: {
		name: name,
		email: email,
		password: password,
	},
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
