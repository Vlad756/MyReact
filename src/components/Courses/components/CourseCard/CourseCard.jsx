import React from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react';
import { Button } from '../../../../common/Button/Button';
import {
	ADMIN_ROLE_NAME,
	COURSES_PATH,
	COURSES_UPDATE_PATH,
	SHOW_COURSE_BUTTON_TEXT,
} from '../../../../constants';
import { CourseCardInfo } from './CourseCardInfo';
import {
	MAX_AUTHORS_LENGTH,
	AUTHORS_SUBSTRING_START,
	AUTHORS_SUBSTRING_END,
} from '../../../../constants';
import { convertMinutesToHoursMinutes } from '../../../../helpers/MinutesToHoursMinutesConverter';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../../store/selectors';
import { removeCourse } from '../../../../store/courses/thunk';

export const CourseCard = ({
	id,
	title,
	description,
	duration,
	createDate,
	authors,
}) => {
	const dispatch = useDispatch();
	const { role } = useSelector(selectUser);

	const truncate = (str) => {
		return str.length > MAX_AUTHORS_LENGTH
			? str.substring(AUTHORS_SUBSTRING_START, AUTHORS_SUBSTRING_END) + '...'
			: str;
	};

	const handleDeleteCourse = () => {
		dispatch(removeCourse(id));
	};

	return (
		<Segment className='courseCard'>
			<Grid columns={2} relaxed='very'>
				<Grid.Column>
					<h2>{title}</h2>
					<p>{description}</p>
				</Grid.Column>
				<Grid.Column>
					<CourseCardInfo infoName='Authors: ' value={truncate(authors)} />
					<CourseCardInfo
						infoName='Duration: '
						value={convertMinutesToHoursMinutes(duration)}
					/>
					<CourseCardInfo infoName='Created: ' value={createDate} />
					<Button
						content={SHOW_COURSE_BUTTON_TEXT}
						as={NavLink}
						to={`${COURSES_PATH}/${id}`}
					/>
					{role === ADMIN_ROLE_NAME ? (
						<>
							<Button
								icon='edit'
								as={NavLink}
								to={`${COURSES_UPDATE_PATH}/:${id}`}
							/>
							<Button icon='trash' onClick={handleDeleteCourse} />
						</>
					) : (
						<></>
					)}
				</Grid.Column>
			</Grid>

			<Divider vertical hidden />
		</Segment>
	);
};

CourseCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	duration: PropTypes.number,
	createDate: PropTypes.string,
	authors: PropTypes.string,
};
