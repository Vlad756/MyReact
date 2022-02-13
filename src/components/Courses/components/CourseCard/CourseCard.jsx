import React from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react';
import { Button } from '../../../../common/Button/Button';
import { COURSE_PATH, SHOW_COURSE_BUTTON_TEXT } from '../../../../constants';
import { CourseCardInfo } from './CourseCardInfo';
import {
	MAX_AUTHORS_LENGTH,
	AUTHORS_SUBSTRING_START,
	AUTHORS_SUBSTRING_END,
} from '../../../../constants';
import { convertMinutesToHoursMinutes } from '../../../../helpers/MinutesToHoursMinutesConverter';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const CourseCard = ({
	id,
	title,
	description,
	duration,
	createDate,
	authors,
}) => {
	function truncate(str) {
		return str.length > MAX_AUTHORS_LENGTH
			? str.substring(AUTHORS_SUBSTRING_START, AUTHORS_SUBSTRING_END) + '...'
			: str;
	}

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
						to={`${COURSE_PATH}/${id}`}
					/>
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
	authors: PropTypes.array,
};
