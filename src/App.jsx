import { useState } from 'react';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Header } from './components/Header/Header';
import { mockedCoursesList, mockedAuthorsList } from './constants';

function App() {
	const [isCreatingNewCourse, setIsCreatingNewCourse] = useState(false);
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [courses, setCourses] = useState(mockedCoursesList);
	return (
		<>
			<Header />
			{isCreatingNewCourse ? (
				<CreateCourse
					setSwitcher={setIsCreatingNewCourse}
					authors={authors}
					setAuthors={setAuthors}
					courses={courses}
					setCourses={setCourses}
				/>
			) : (
				<Courses
					setSwitcher={setIsCreatingNewCourse}
					authors={authors}
					courses={courses}
				/>
			)}
		</>
	);
}

export default App;
