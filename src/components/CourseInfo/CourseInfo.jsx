import { Link, useParams } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import { COURSES_PATH } from '../../constants';
import { CourseCardInfo } from '../Courses/components/CourseCard/CourseCardInfo';

export const CourseInfo = ({ courses, authors }) => {
	const { id } = useParams();
	const {
		title,
		description,
		creationDate,
		duration,
		authors: authorsIds,
	} = courses.find((c) => c.id === id);

	function getAuthors(arr) {
		return authors.reduce((prev, current) => {
			if (arr.includes(current.id)) {
				return [...prev, current];
			}
			return [...prev];
		}, []);
	}

	const courseAuthors = getAuthors(authorsIds);

	return (
		<Segment>
			<Link to={COURSES_PATH}>Back to courses</Link>
			<h3>{title}</h3>
			<Grid columns={2} relaxed='very'>
				<Grid.Column className='courseInfoDescriptionColumn'>
					{description}
				</Grid.Column>
				<Grid.Column className='courseInfoAuthorsColumn'>
					<CourseCardInfo infoName={'ID'} value={id} />
					<CourseCardInfo infoName={'Duration'} value={duration} />
					<CourseCardInfo infoName={'Created'} value={creationDate} />
					<p className='courseCardInfo'>Authors</p>
					{courseAuthors.map((a, i) => (
						<p key={i}>{a.name}</p>
					))}
				</Grid.Column>
			</Grid>
		</Segment>
	);
};
