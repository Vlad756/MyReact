import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { Button } from '../../common/Button/Button';
import {
	LOGIN_PATH,
	LOGOUT_BUTTON_TEXT,
	USER_TOKEN_KEY_NAME,
} from '../../constants';
import { Logo } from './components/Logo/Logo';
import PropTypes from 'prop-types';

export const Header = ({ token, setToken }) => {
	useEffect(() => {
		const token = window.localStorage.getItem(USER_TOKEN_KEY_NAME);
		setToken(token);
	}, [setToken]);

	function handleButtonClick() {
		window.localStorage.removeItem(USER_TOKEN_KEY_NAME);
		setToken(null);
	}

	return (
		<Menu>
			<Menu.Item>
				<Logo />
			</Menu.Item>
			{token !== null && (
				<Menu.Menu position='right'>
					<Menu.Item>{'Name'}</Menu.Item>
					<Menu.Item floated='right'>
						<Button
							content={LOGOUT_BUTTON_TEXT}
							onClick={handleButtonClick}
							as={NavLink}
							to={LOGIN_PATH}
						/>
					</Menu.Item>
				</Menu.Menu>
			)}
		</Menu>
	);
};

Header.propTypes = {
	token: PropTypes.string,
	setToken: PropTypes.func,
};
