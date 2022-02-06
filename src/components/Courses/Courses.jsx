import React, { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import { Grid } from 'semantic-ui-react';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import { CREATE_COURSE_BUTTON_TEXT } from '../../constants';

export default function Courses(props) {
	const authors = mockedAuthorsList;
	const [courses, setCourses] = useState(mockedCoursesList);
	const [searchfield, setSearchfield] = useState('');

	function getAuthorsNames(arr) {
		let str = '';
		arr.forEach((id) => {
			const name = authors.find((a) => a.id === id)?.name;
			if (name) {
				str += name + ', ';
			}
		});
		return str.substring(0, str.length - 2);
	}

	function onSearchChange(event) {
		setSearchfield(event.target.value);
		filteredCourses();
	}

	function filteredCourses() {
		setCourses(mockedCoursesList);
		if (searchfield !== '') {
			const c = courses.filter((course) => {
				return (
					course.title.toLowerCase().includes(searchfield.toLowerCase()) ||
					course.id.toLowerCase().includes(searchfield.toLowerCase())
				);
			});
			setCourses(c);
		}
	}

	return (
		<>
			<Grid style={{ marginBottom: 2 }}>
				<Grid.Column width={5} style={{ marginLeft: '10%' }}>
					<SearchBar searchChange={onSearchChange} />
				</Grid.Column>
				<Grid.Column width={3} floated='right' style={{ marginRight: '10%' }}>
					<Button
						content={CREATE_COURSE_BUTTON_TEXT}
						onClick={() => props.setSwitcher(true)}
					/>
				</Grid.Column>
			</Grid>
			{courses.map((x, i) => (
				<CourseCard
					Key={i}
					title={x.title}
					description={x.description}
					authors={getAuthorsNames(x.authors)}
					duration={x.duration}
					createDate={x.creationDate}
				/>
			))}
		</>
	);
}
