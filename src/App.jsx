import { useState } from 'react';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';

function App() {
	const [createSwitcher, setCreateSwitcher] = useState(false);
	return (
		<>
			<Header />
			{createSwitcher ? (
				<CreateCourse setSwitcher={(value) => setCreateSwitcher(value)} />
			) : (
				<Courses setSwitcher={(value) => setCreateSwitcher(value)} />
			)}
		</>
	);
}

export default App;
