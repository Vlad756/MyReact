import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

export const Header = () => {
	return (
		<Menu>
			<Menu.Item>
				<Logo />
			</Menu.Item>
			<Menu.Menu position='right'>
				<Menu.Item>{'Name'}</Menu.Item>
				<Menu.Item floated='right'>
					<Button
						content={'Test Text'}
						onClick={() => console.log('clicked')}
					/>
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};
