import { Courses } from './components/Courses/Courses';
import { CourseForm } from './components/CourseForm/CourseForm';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';
import {
	COURSES_PATH,
	LOGIN_PATH,
	REGISTRATION_PATH,
	COURSES_ADD_PATH,
	DEFAULT_PATH,
	COURSES_UPDATE_PATH,
} from './constants';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { useSelector } from 'react-redux';
import { selectUser } from './store/selectors';
import { PrivateRouter } from './components/PrivateRouter/PrivateRouter';

const App = () => {
	const { isAuth } = useSelector(selectUser);

	return (
		<>
			<Header />
			<Container>
				<Routes>
					<Route
						path={DEFAULT_PATH}
						element={
							isAuth ? (
								<Navigate to={COURSES_PATH} />
							) : (
								<Navigate to={LOGIN_PATH} />
							)
						}
					/>
					<Route path={COURSES_PATH} element={<Courses />} />
					<Route
						path={COURSES_ADD_PATH}
						element={
							<PrivateRouter>
								<CourseForm />
							</PrivateRouter>
						}
					/>
					<Route
						path={`${COURSES_UPDATE_PATH}/:id`}
						element={
							<PrivateRouter>
								<CourseForm />
							</PrivateRouter>
						}
					/>
					<Route path={LOGIN_PATH} element={<Login />} />
					<Route path={REGISTRATION_PATH} element={<Registration />} />
					<Route path={`${COURSES_PATH}/:id`} element={<CourseInfo />} />
				</Routes>
			</Container>
		</>
	);
};

export default App;
