import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import { COURSES_PATH, LOGIN_PATH } from '../../constants';
import { CourseCardInfo } from '../Courses/components/CourseCard/CourseCardInfo';
import { useSelector } from 'react-redux';
import { selectAuthor, selectCourse, selectUser } from '../../store/selectors';

export const CourseInfo = () => {
	const user = useSelector(selectUser);
	const courses = useSelector(selectCourse);
	const author = useSelector(selectAuthor);
	const { id } = useParams();
	const navigate = useNavigate();
	const currentCourse = courses.find((c) => c.id === id);

	const getAuthors = (arr) => {
		return author.reduce((prev, current) => {
			if (arr.includes(current.id)) {
				return [...prev, current];
			}
			return [...prev];
		}, []);
	};

	useEffect(() => {
		if (!user.isAuth) {
			navigate(LOGIN_PATH);
		}
	}, [user.isAuth, navigate]);

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
