import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Header } from 'semantic-ui-react';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import {
	COURSES_PATH,
	ENTER_EMAIL_PLACEHOLDER,
	ENTER_PASSWORD_PLACEHOLDER,
	LOGIN_BUTTON_TEXT,
	REGISTRATION_PATH,
	USER_NAME_KEY_NAME,
	USER_TOKEN_KEY_NAME,
} from '../../constants';
import PropTypes from 'prop-types';

export const Login = ({ setToken }) => {
	const navigate = useNavigate();
	const [emailInput, setEmailInput] = useState();
	const [passwordInput, setPasswordInput] = useState();

	const handleFormSubmit = async () => {
		const user = {
			email: emailInput,
			password: passwordInput,
		};
		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		if (result.successful === true) {
			window.localStorage.setItem(USER_TOKEN_KEY_NAME, result.result);
			window.localStorage.setItem(USER_NAME_KEY_NAME, result.user.name);
			setToken(result.result);
			navigate(COURSES_PATH);
		}
	};

	return (
		<Form className='loginForm' autoComplete='off' onSubmit={handleFormSubmit}>
			<Header as='h2' content='Login' color='teal' textAlign='center' />
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
				<Button type='submit' content={LOGIN_BUTTON_TEXT} />
			</Form.Field>
			<Form.Field>
				<p>
					If you not have an account you can{' '}
					<Link to={REGISTRATION_PATH}>registration</Link>
				</p>
			</Form.Field>
		</Form>
	);
};

Login.propTypes = {
	setToken: PropTypes.func,
};
