import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Header } from 'semantic-ui-react';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import {
	ENTER_EMAIL_PLACEHOLDER,
	ENTER_NAME_PLACEHOLDER,
	ENTER_PASSWORD_PLACEHOLDER,
	LOGIN_PATH,
	REGISTRATION_BUTTON_TEXT,
} from '../../constants';

export const Registration = () => {
	const navigate = useNavigate();
	const [nameInput, setNameInput] = useState();
	const [emailInput, setEmailInput] = useState();
	const [passwordInput, setPasswordInput] = useState();

	const handleSubmit = async () => {
		const newUser = {
			name: nameInput,
			email: emailInput,
			password: passwordInput,
		};
		const response = await fetch('http://localhost:3000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		if (result.successful === true) {
			navigate(LOGIN_PATH);
		}
	};

	return (
		<Form
			className='registrationForm'
			autoComplete='off'
			onSubmit={handleSubmit}
		>
			<Header as='h2' content='Registration' color='teal' textAlign='center' />
			<Form.Field>
				<p>Name</p>
				<Input
					type='text'
					value={nameInput}
					placeholder={ENTER_NAME_PLACEHOLDER}
					onChange={(e) => setNameInput(e.target.value)}
				/>
			</Form.Field>
			<Form.Field>
				<p>Email</p>
				<Input
					type='email'
					value={emailInput}
					placeholder={ENTER_EMAIL_PLACEHOLDER}
					onChange={(e) => setEmailInput(e.target.value)}
				/>
			</Form.Field>
			<Form.Field>
				<p>Password</p>
				<Input
					type='password'
					value={passwordInput}
					placeholder={ENTER_PASSWORD_PLACEHOLDER}
					onChange={(e) => setPasswordInput(e.target.value)}
				/>
			</Form.Field>
			<Form.Field>
				<Button type='submit' content={REGISTRATION_BUTTON_TEXT} />
			</Form.Field>
			<Form.Field>
				<p>
					If you have an account you can <Link to={LOGIN_PATH}>login</Link>
				</p>
			</Form.Field>
		</Form>
	);
};
