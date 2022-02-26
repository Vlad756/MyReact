import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { Button } from '../../common/Button/Button';
import {
	LOGIN_PATH,
	LOGOUT_BUTTON_TEXT,
	USER_EMAIL_KEY_NAME,
	USER_NAME_KEY_NAME,
	USER_TOKEN_KEY_NAME,
} from '../../constants';
import { Logo } from './components/Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../store/user/actionCreators';
import { selectUser } from '../../store/selectors';

export const Header = () => {
	const dispatch = useDispatch();
	const { isAuth, name } = useSelector(selectUser);

	const handleButtonClick = () => {
		dispatch(userLogout());
		window.localStorage.removeItem(USER_NAME_KEY_NAME);
		window.localStorage.removeItem(USER_EMAIL_KEY_NAME);
		window.localStorage.removeItem(USER_TOKEN_KEY_NAME);
	};

	return (
		<Menu>
			<Menu.Item>
				<Logo />
			</Menu.Item>
			{isAuth && (
				<Menu.Menu position='right'>
					<Menu.Item>{name}</Menu.Item>
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
