import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { Button } from '../../common/Button/Button';
import { LOGIN_PATH, LOGOUT_BUTTON_TEXT } from '../../constants';
import { Logo } from './components/Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/user/actionCreators';
import { selectUser } from '../../store/selectors';

export const Header = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleButtonClick = () => {
		dispatch(logout());
		setIsLoggedIn(false);
	};

	useEffect(() => {
		setIsLoggedIn(user.isAuth);
	}, [user]);

	return (
		<Menu>
			<Menu.Item>
				<Logo />
			</Menu.Item>
			{isLoggedIn && (
				<Menu.Menu position='right'>
					<Menu.Item>{user.name}</Menu.Item>
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
