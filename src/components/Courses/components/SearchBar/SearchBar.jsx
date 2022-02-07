import React from 'react';
import { Form, Grid } from 'semantic-ui-react';
import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';
import {
	SEARCH_BUTTON_TEXT,
	SEARCH_INPUT_PLACEHOLDER,
} from '../../../../constants';

export const SearchBar = ({
	searchChange,
	onSearchButtonClick,
	searchField,
}) => {
	return (
		<Form className='ui form'>
			<Grid>
				<Grid.Column width={12}>
					<Input
						onChange={searchChange}
						type='text'
						placeholder={SEARCH_INPUT_PLACEHOLDER}
						value={searchField}
					/>
				</Grid.Column>
				<Grid.Column>
					<Button
						className='searchButton'
						content={SEARCH_BUTTON_TEXT}
						onClick={onSearchButtonClick}
					/>
				</Grid.Column>
			</Grid>
		</Form>
	);
};
