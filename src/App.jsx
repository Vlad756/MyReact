import { useState } from 'react';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Header } from './components/Header/Header';

function App() {
	const [isCreatingNewCourse, setIsCreatingNewCourse] = useState(false);
	return (
		<>
			<Header />
			{isCreatingNewCourse ? (
				<CreateCourse setSwitcher={setIsCreatingNewCourse} />
			) : (
				<Courses setSwitcher={setIsCreatingNewCourse} />
			)}
		</>
	);
}

export default App;
