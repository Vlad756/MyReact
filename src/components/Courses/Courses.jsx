import React, { useEffect, useRef, useState } from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';

import { Grid } from 'semantic-ui-react';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';
import {
	ADD_NEW_COURSE_BUTTON_TEXT,
	COURSES_ADD_PATH,
	LOGIN_PATH,
	UserRole,
} from '../../constants';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectAuthors,
	selectCourses,
	selectUser,
} from '../../store/selectors';
import { fetchUserThunk } from '../../store/user/thunk';
import { fetchCoursesThunk } from '../../store/courses/thunk';
import { fetchAuthorsThunk } from '../../store/authors/thunk';

export const Courses = () => {
	const { isAuth, role } = useSelector(selectUser);
	const courses = useSelector(selectCourses);
	const authors = useSelector(selectAuthors);
	const dispatch = useDispatch();
	const [searchField, setSearchField] = useState('');
	const searchFieldRef = useRef('');
	const navigate = useNavigate();

	const getAuthorsNames = (arr) => {
		return authors
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

	const filteredCourses = filterCourses(courses);

	useEffect(() => {
		if (isAuth) {
			dispatch(fetchAuthorsThunk());
			dispatch(fetchCoursesThunk());
			if (role === '') {
				dispatch(fetchUserThunk());
			}
		} else {
			navigate(LOGIN_PATH);
		}
	}, [isAuth, dispatch, navigate, role]);

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
				{role === UserRole.ADMIN ? (
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
				) : (
					<></>
				)}
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
