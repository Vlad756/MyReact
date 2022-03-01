import { getCurrentUser, logoutRequest } from '../../services';
import { setCurrentUserRole, userLogout } from './actionCreators';

export const logout = async (dispatch, getState) => {
	const response = await logoutRequest();
	if (response?.successful) {
		dispatch(userLogout);
	}
};

export const fetchCurrentUserRole = async (dispatch, getState) => {
	const response = await getCurrentUser();
	if (response?.successful) {
		dispatch(setCurrentUserRole(response.result.role));
	}
};
