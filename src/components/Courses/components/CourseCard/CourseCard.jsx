import React from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react';
import Button from '../../../../common/Button/Button';
import { SHOW_COURSE_BUTTON_TEXT } from '../../../../constants';

export default function CourseCard(props) {
	function trancate(str) {
		return str.length > 40 ? str.substring(0, 37) + '...' : str;
	}

	return (
		<Segment style={{ width: '80%', margin: '0 auto', marginBottom: 10 }}>
			<Grid columns={2} relaxed='very'>
				<Grid.Column>
					<h2>{props.title}</h2>
					<p>{props.description}</p>
				</Grid.Column>
				<Grid.Column>
					<p>
						<b>Authors:</b> {trancate(props.authors)}
					</p>
					<p>
						<b>Duration:</b> {props.duration}
					</p>
					<p>
						<b>Created:</b> {props.createDate}
					</p>
					<Button
						content={SHOW_COURSE_BUTTON_TEXT}
						onClick={() => console.log('course')}
					/>
				</Grid.Column>
			</Grid>

			<Divider vertical hidden />
		</Segment>
	);
}
