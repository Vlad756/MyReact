import React from 'react';
import { Form } from 'semantic-ui-react';

export default function Input(props) {
	return (
		<Form.Field>
			<label>{props.label}</label>
			<input {...props}></input>
		</Form.Field>
	);
}
