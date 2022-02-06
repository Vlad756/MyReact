import React from 'react';
import { Form } from 'semantic-ui-react';

export const Input = ({ label, value, onChange, name, type, placeholder }) => {
	return (
		<Form.Field>
			<label>
				{label}
				<input
					onChange={onChange}
					name={name}
					type={type}
					placeholder={placeholder}
					value={value}
				></input>
			</label>
		</Form.Field>
	);
};
