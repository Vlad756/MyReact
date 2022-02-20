import {
	USER_EMAIL_KEY_NAME,
	USER_NAME_KEY_NAME,
	USER_TOKEN_KEY_NAME,
} from '../../constants';
import * as actions from './actionTypes';

const initialUserState = {
	isAuth:
		window.localStorage.getItem(USER_TOKEN_KEY_NAME) !== null ? true : false,
	name: window.localStorage.getItem(USER_NAME_KEY_NAME) ?? '',
	email: window.localStorage.getItem(USER_EMAIL_KEY_NAME) ?? '',
	token: window.localStorage.getItem(USER_TOKEN_KEY_NAME) ?? '',
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case actions.LOGIN:
			return state;
		case actions.LOGOUT:
			window.localStorage.removeItem(USER_TOKEN_KEY_NAME);
			window.localStorage.removeItem(USER_NAME_KEY_NAME);
			window.localStorage.removeItem(USER_EMAIL_KEY_NAME);
			return initialUserState;
		case actions.REGISTER:
			return state;
		case actions.SET_USER_STORE:
			return {
				isAuth: action.payload.isAuth,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
			};
		default:
			return state;
	}
};
