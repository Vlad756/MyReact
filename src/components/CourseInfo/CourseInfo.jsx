import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import { COURSES_PATH, LOGIN_PATH } from '../../constants';
import { CourseCardInfo } from '../Courses/components/CourseCard/CourseCardInfo';
import PropTypes from 'prop-types';
import { TokenContext } from '../../App';

export const CourseInfo = ({ courses, authors }) => {
	const { id } = useParams();
	const token = useContext(TokenContext);
	const navigate = useNavigate();
	const course = courses.find((c) => c.id === id);

	const getAuthors = (arr) => {
		return authors.reduce((prev, current) => {
			if (arr.includes(current.id)) {
				return [...prev, current];
			}
			return [...prev];
		}, []);
	};

	useEffect(() => {
		if (!token) {
			navigate(LOGIN_PATH);
		}
	}, [token]);

	return (
		<>
			{course && (
				<Segment>
					<Link to={COURSES_PATH}>Back to courses</Link>
					<h3>{course.title}</h3>
					<Grid columns={2} relaxed='very'>
						<Grid.Column className='courseInfoDescriptionColumn'>
							{course.description}
						</Grid.Column>
						<Grid.Column className='courseInfoAuthorsColumn'>
							<CourseCardInfo infoName={'ID'} value={id} />
							<CourseCardInfo infoName={'Duration'} value={course.duration} />
							<CourseCardInfo
								infoName={'Created'}
								value={course.creationDate}
							/>
							<p className='courseCardInfo'>Authors</p>
							{getAuthors(course.authors).map((a, i) => (
								<p key={i}>{a.name}</p>
							))}
						</Grid.Column>
					</Grid>
				</Segment>
			)}
		</>
	);
};

CourseInfo.propTypes = {
	courses: PropTypes.array,
	authors: PropTypes.array,
};
