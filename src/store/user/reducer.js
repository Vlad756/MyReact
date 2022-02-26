import {
	USER_EMAIL_KEY_NAME,
	USER_NAME_KEY_NAME,
	USER_TOKEN_KEY_NAME,
} from '../../constants';
import * as actions from './actionTypes';

const initialUserState = {
	isAuth: !!window.localStorage.getItem(USER_TOKEN_KEY_NAME),
	name: window.localStorage.getItem(USER_NAME_KEY_NAME) ?? '',
	email: window.localStorage.getItem(USER_EMAIL_KEY_NAME) ?? '',
	token: window.localStorage.getItem(USER_TOKEN_KEY_NAME) ?? '',
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case actions.USER_LOGOUT:
			return {
				isAuth: false,
				name: '',
				email: '',
				token: '',
			};
		case actions.USER_SET:
			return action.payload;
		default:
			return state;
	}
};
