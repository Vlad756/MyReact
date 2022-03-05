import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import { COURSES_PATH, LOGIN_PATH } from '../../constants';
import { CourseCardInfo } from '../Courses/components/CourseCard/CourseCardInfo';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectAuthors,
	selectCourses,
	selectUser,
} from '../../store/selectors';
import { fetchAuthorsThunk } from '../../store/authors/thunk';
import { fetchCoursesThunk } from '../../store/courses/thunk';

export const CourseInfo = () => {
	const { isAuth } = useSelector(selectUser);
	const courses = useSelector(selectCourses);
	const authors = useSelector(selectAuthors);
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();
	const currentCourse = courses.find((c) => c.id === id);

	const getAuthors = (arr) => {
		return authors.reduce((prev, current) => {
			if (arr.includes(current.id)) {
				return [...prev, current];
			}
			return [...prev];
		}, []);
	};

	useEffect(() => {
		if (isAuth) {
			dispatch(fetchAuthorsThunk());
			dispatch(fetchCoursesThunk());
		} else {
			navigate(LOGIN_PATH);
		}
	}, [isAuth, dispatch, navigate]);

	return (
		<>
			{currentCourse && (
				<Segment>
					<Link to={COURSES_PATH}>Back to courses</Link>
					<h3>{currentCourse.title}</h3>
					<Grid columns={2} relaxed='very'>
						<Grid.Column className='courseInfoDescriptionColumn'>
							{currentCourse.description}
						</Grid.Column>
						<Grid.Column className='courseInfoAuthorsColumn'>
							<CourseCardInfo infoName={'ID'} value={id} />
							<CourseCardInfo
								infoName={'Duration'}
								value={currentCourse.duration}
							/>
							<CourseCardInfo
								infoName={'Created'}
								value={currentCourse.creationDate}
							/>
							<p className='courseCardInfo'>Authors</p>
							{getAuthors(currentCourse.authors).map((a, i) => (
								<p key={i}>{a.name}</p>
							))}
						</Grid.Column>
					</Grid>
				</Segment>
			)}
		</>
	);
};
