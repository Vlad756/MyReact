import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { COURSES_PATH, UserRole } from '../../constants';
import { selectUser } from '../../store/selectors';
import { fetchUserThunk } from '../../store/user/thunk';

export const PrivateRouter = ({ children }) => {
	const { role } = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		if (role === '') {
			dispatch(fetchUserThunk());
		}
	}, [role]);

	return (
		<>
			{role === UserRole.ADMIN && children}
			{role === UserRole.USER && <Navigate to={COURSES_PATH} />}
		</>
	);
};
