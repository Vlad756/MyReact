import React, { useEffect, useRef, useState } from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';

import { Grid } from 'semantic-ui-react';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';
import {
	ADD_NEW_COURSE_BUTTON_TEXT,
	COURSES_ADD_PATH,
	LOGIN_PATH,
} from '../../constants';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthor, selectCourse, selectUser } from '../../store/selectors';

export const Courses = () => {
	const user = useSelector(selectUser);
	const author = useSelector(selectAuthor);
	const course = useSelector(selectCourse);
	const [searchField, setSearchField] = useState('');
	const searchFieldRef = useRef('');
	const navigate = useNavigate();

	const getAuthorsNames = (arr) => {
		return author
			.reduce((prev, current) => {
				if (arr.includes(current.id)) {
					return [...prev, current.name];
				}
				return [...prev];
			}, [])
			.join(', ');
	};

	const onSearchChange = (event) => {
		searchFieldRef.current = event.target.value;
	};

	const filterCourses = (courses) => {
		return courses.filter((course) => {
			return (
				course.title.toLowerCase().includes(searchField.toLowerCase()) ||
				course.id.toLowerCase().includes(searchField.toLowerCase())
			);
		});
	};

	const handleOnSearchButtonClick = () => {
		setSearchField(searchFieldRef.current);
	};

	const filteredCourses = filterCourses(course);

	useEffect(() => {
		if (!user.isAuth) {
			navigate(LOGIN_PATH);
		}
	}, [user.isAuth, navigate]);

	return (
		<>
			<Grid className='coursesSearchGrid'>
				<Grid.Column width={5} className='coursesSearchBarColumn'>
					<SearchBar
						searchChange={onSearchChange}
						searchValue={searchFieldRef.current}
						onSearchButtonClick={handleOnSearchButtonClick}
					/>
				</Grid.Column>
				<Grid.Column
					width={3}
					floated='right'
					className='addCourseButtonColumn'
				>
					<Button
						content={ADD_NEW_COURSE_BUTTON_TEXT}
						as={NavLink}
						to={COURSES_ADD_PATH}
					/>
				</Grid.Column>
			</Grid>
			{filteredCourses.map((x, i) => (
				<CourseCard
					key={i}
					id={x.id}
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
