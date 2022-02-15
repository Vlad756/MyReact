import { createContext, useState } from 'react';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';
import {
	mockedCoursesList,
	mockedAuthorsList,
	COURSES_PATH,
	LOGIN_PATH,
	REGISTRATION_PATH,
	COURSES_ADD_PATH,
	USER_TOKEN_KEY_NAME,
	DEFAULT_PATH,
} from './constants';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

export const TokenContext = createContext(null);

const App = () => {
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [courses, setCourses] = useState(mockedCoursesList);
	const [token, setToken] = useState(localStorage.getItem(USER_TOKEN_KEY_NAME));

	return (
		<TokenContext.Provider value={token}>
			<Header token={token} setToken={setToken} />
			<Container>
				<Routes>
					<Route
						path={DEFAULT_PATH}
						element={
							token ? (
								<Navigate to={COURSES_PATH} />
							) : (
								<Navigate to={LOGIN_PATH} />
							)
						}
					/>
					<Route
						path={COURSES_PATH}
						element={<Courses authors={authors} courses={courses} />}
					/>
					<Route
						path={COURSES_ADD_PATH}
						element={
							<CreateCourse
								authors={authors}
								setAuthors={setAuthors}
								courses={courses}
								setCourses={setCourses}
							/>
						}
					/>
					<Route path={LOGIN_PATH} element={<Login setToken={setToken} />} />
					<Route path={REGISTRATION_PATH} element={<Registration />} />
					<Route
						path={`${COURSES_PATH}/:id`}
						element={<CourseInfo courses={courses} authors={authors} />}
					/>
				</Routes>
			</Container>
		</TokenContext.Provider>
	);
};

export default App;
