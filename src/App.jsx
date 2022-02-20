import { useCallback, useEffect } from 'react';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';
import {
	COURSES_PATH,
	LOGIN_PATH,
	REGISTRATION_PATH,
	COURSES_ADD_PATH,
	DEFAULT_PATH,
} from './constants';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthors } from './store/authors/actionCreators';
import { setCourses } from './store/courses/actionCreators';
import { selectUser } from './store/selectors';

const App = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const fetchAuthors = useCallback(async () => {
		const response = await fetch('http://localhost:3000/authors/all', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		if (result.successful === true) {
			dispatch(setAuthors(result.result));
		}
	}, [dispatch]);

	const fetchCourses = useCallback(async () => {
		const response = await fetch('http://localhost:3000/courses/all', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		if (result.successful === true) {
			dispatch(setCourses(result.result));
		}
	}, [dispatch]);

	useEffect(() => {
		fetchAuthors();
		fetchCourses();
	}, [fetchAuthors, fetchCourses]);

	return (
		<>
			<Header />
			<Container>
				<Routes>
					<Route
						path={DEFAULT_PATH}
						element={
							user.isAuth ? (
								<Navigate to={COURSES_PATH} />
							) : (
								<Navigate to={LOGIN_PATH} />
							)
						}
					/>
					<Route path={COURSES_PATH} element={<Courses />} />
					<Route path={COURSES_ADD_PATH} element={<CreateCourse />} />
					<Route path={LOGIN_PATH} element={<Login />} />
					<Route path={REGISTRATION_PATH} element={<Registration />} />
					<Route path={`${COURSES_PATH}/:id`} element={<CourseInfo />} />
				</Routes>
			</Container>
		</>
	);
};

export default App;
