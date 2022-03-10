import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
	ADD_NEW_COURSE_BUTTON_TEXT,
	COURSES_ADD_PATH,
} from '../../../constants';
import { Courses } from '../Courses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CourseForm } from '../../CourseForm/CourseForm';
import { PrivateRouter } from '../../PrivateRouter/PrivateRouter';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
		role: 'admin',
	},
	courses: [
		{
			id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
			title: 'Test Title',
			description: `Test Description`,
			creationDate: '8/3/2021',
			duration: 160,
			authors: [
				'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
				'f762978b-61eb-4096-812b-ebde22838167',
			],
		},
		{
			id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
			title: 'Test Title',
			description: `Test Description`,
			creationDate: '10/11/2020',
			duration: 210,
			authors: [
				'df32994e-b23d-497c-9e4d-84e4dc02882f',
				'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			],
		},
	],
	authors: [
		{
			id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			name: 'Vasiliy Dobkin',
		},
		{
			id: 'f762978b-61eb-4096-812b-ebde22838167',
			name: 'Nicolas Kim',
		},
		{
			id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
			name: 'Anna Sidorenko',
		},
		{
			id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			name: 'Valentina Larina',
		},
	],
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

test('CourseForm should be showed after a click on a button "Add new course"', async () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<Routes>
					<Route path={'/'} element={<Courses />} />
					<Route
						path={COURSES_ADD_PATH}
						element={
							<PrivateRouter>
								<CourseForm />
							</PrivateRouter>
						}
					/>
				</Routes>
			</BrowserRouter>
		</Provider>
	);

	fireEvent.click(screen.getByText(ADD_NEW_COURSE_BUTTON_TEXT));

	await waitFor(() => screen.getByTestId('createCourseForm'));

	expect(screen.getByTestId('createCourseForm')).toBeInTheDocument();
});

test('Courses should display amount of CourseCard equal length of courses array', async () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<Courses />
			</BrowserRouter>
		</Provider>
	);

	expect(screen.queryAllByText('Test Title').length).toBe(
		mockedState.courses.length
	);
});

test('Courses should display Empty container if courses array length is 0', async () => {
	mockedState.courses = [];
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<Courses />
			</BrowserRouter>
		</Provider>
	);

	expect(screen.queryAllByText('Test Title').length).toBe(0);
});
