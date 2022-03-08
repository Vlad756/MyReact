import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { CourseCard } from '../CourseCard';
import { BrowserRouter } from 'react-router-dom';

const testCourse = {
	id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
	title: 'Test Title',
	description: `Test Description`,
	creationDate: '8/3/2021',
	duration: 160,
	authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d'],
};

const testAuthor = {
	id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
	name: 'Test Name',
};

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: [testCourse],
	authors: [testAuthor],
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

test('Course Card', () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<CourseCard
					id={testCourse.id}
					title={testCourse.title}
					description={testCourse.description}
					createDate={testCourse.creationDate}
					duration={testCourse.duration}
					authors={testAuthor.name}
				/>
			</BrowserRouter>
		</Provider>
	);
	expect(screen.queryByText('Test Title')).toBeInTheDocument();
	expect(screen.queryByText('Test Name')).toBeInTheDocument();
	expect(screen.queryByText('Test Description')).toBeInTheDocument();
	expect(screen.queryByText('8/3/2021')).toBeInTheDocument();
	expect(screen.queryByText('2:40')).toBeInTheDocument();
});
