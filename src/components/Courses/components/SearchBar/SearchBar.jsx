import React from 'react';
import { Form, Grid } from 'semantic-ui-react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import {
	SEARCH_BUTTON_TEXT,
	SEARCH_INPUT_PLACEHOLDER,
} from '../../../../constants';

export default function SearchBar(props) {
	return (
		<Form className='ui form'>
			<Grid>
				<Grid.Column width={12}>
					<Input
						onChange={props.searchChange}
						name='search'
						type='text'
						placeholder={SEARCH_INPUT_PLACEHOLDER}
					/>
				</Grid.Column>
				<Grid.Column>
					<Button
						style={{ marginTop: '5px' }}
						content={SEARCH_BUTTON_TEXT}
						onClick={props.searchChange}
					/>
				</Grid.Column>
			</Grid>
		</Form>
	);
}
