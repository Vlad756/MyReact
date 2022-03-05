import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { Button } from '../../common/Button/Button';
import { LOGIN_PATH, LOGOUT_BUTTON_TEXT } from '../../constants';
import { Logo } from './components/Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/selectors';
import { logoutThunk } from '../../store/user/thunk';

export const Header = () => {
	const dispatch = useDispatch();
	const { isAuth, name } = useSelector(selectUser);

	const handleButtonClick = () => {
		dispatch(logoutThunk());
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
