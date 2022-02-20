import React from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react';
import { Button } from '../../../../common/Button/Button';
import { COURSES_PATH, SHOW_COURSE_BUTTON_TEXT } from '../../../../constants';
import { CourseCardInfo } from './CourseCardInfo';
import {
	MAX_AUTHORS_LENGTH,
	AUTHORS_SUBSTRING_START,
	AUTHORS_SUBSTRING_END,
} from '../../../../constants';
import { convertMinutesToHoursMinutes } from '../../../../helpers/MinutesToHoursMinutesConverter';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { courseRemoved } from '../../../../store/courses/actionCreators';

export const CourseCard = ({
	id,
	title,
	description,
	duration,
	createDate,
	authors,
}) => {
	const dispatch = useDispatch();

	const truncate = (str) => {
		return str.length > MAX_AUTHORS_LENGTH
			? str.substring(AUTHORS_SUBSTRING_START, AUTHORS_SUBSTRING_END) + '...'
			: str;
	};

	const handleDeleteCourse = () => {
		dispatch(courseRemoved(id));
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
					<Button icon='edit' />
					<Button icon='trash' onClick={handleDeleteCourse} />
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
