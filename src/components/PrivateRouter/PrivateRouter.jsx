import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { ADMIN_ROLE_NAME, COURSES_PATH } from '../../constants';
import { selectUser } from '../../store/selectors';

export const PrivateRouter = () => {
	const { role } = useSelector(selectUser);
	return role === ADMIN_ROLE_NAME ? <Outlet /> : <Navigate to={COURSES_PATH} />;
};
