import React, { useState } from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import {
	mockedCoursesList as courses,
	mockedAuthorsList as authors,
} from '../../constants';
import { Grid } from 'semantic-ui-react';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ADD_NEW_COURSE_BUTTON_TEXT } from '../../constants';

export const Courses = ({ setSwitcher }) => {
	const [searchField, setSearchField] = useState('');
	const [filteredCourses, setFilteredCourses] = useState(courses);

	function getAuthorsNames(arr) {
		return authors
			.reduce((prev, current) => {
				if (arr.includes(current.id)) {
					return [...prev, current.name];
				}
				return [...prev];
			}, [])
			.join(', ');
	}

	function onSearchChange(event) {
		setSearchField(event.target.value);
	}

	function filterCourses(courses) {
		if (searchField !== '') {
			const filtered = courses.filter((course) => {
				return (
					course.title.toLowerCase().includes(searchField.toLowerCase()) ||
					course.id.toLowerCase().includes(searchField.toLowerCase())
				);
			});
			return filtered;
		}
		return courses;
	}

	function handleOnSearchButtonClick() {
		setFilteredCourses(filterCourses(courses));
	}

	return (
		<>
			<Grid style={{ marginBottom: 2 }}>
				<Grid.Column width={5} style={{ marginLeft: '10%' }}>
					<SearchBar
						searchChange={onSearchChange}
						onSearchButtonClick={handleOnSearchButtonClick}
					/>
				</Grid.Column>
				<Grid.Column width={3} floated='right' style={{ marginRight: '10%' }}>
					<Button
						content={ADD_NEW_COURSE_BUTTON_TEXT}
						onClick={() => setSwitcher(true)}
					/>
				</Grid.Column>
			</Grid>
			{filteredCourses.map((x, i) => (
				<CourseCard
					key={i}
					title={x.title}
					description={x.description}
					authors={getAuthorsNames(x.authors)}
					duration={x.duration}
					createDate={x.creationDate}
				/>
			))}
		</>
	);
};
