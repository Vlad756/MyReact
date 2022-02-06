import React from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react';
import { Button } from '../../../../common/Button/Button';
import { SHOW_COURSE_BUTTON_TEXT } from '../../../../constants';
import { CourseCardInfo } from './CourseCardInfo';
import {
	MAX_AUTHORS_LENGTH,
	AUTHORS_SUBSTRING_START,
	AUTHORS_SUBSTRING_END,
} from '../../../../constants';

export const CourseCard = ({
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
		<Segment style={{ width: '80%', margin: '0 auto', marginBottom: 10 }}>
			<Grid columns={2} relaxed='very'>
				<Grid.Column>
					<h2>{title}</h2>
					<p>{description}</p>
				</Grid.Column>
				<Grid.Column>
					<CourseCardInfo infoName='Authors: ' value={truncate(authors)} />
					<CourseCardInfo infoName='Duration: ' value={duration} />
					<CourseCardInfo infoName='Created: ' value={createDate} />
					<Button
						content={SHOW_COURSE_BUTTON_TEXT}
						onClick={() => console.log('course')}
					/>
				</Grid.Column>
			</Grid>

			<Divider vertical hidden />
		</Segment>
	);
};
