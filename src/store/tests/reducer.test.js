import '@testing-library/jest-dom';
import { courseAdded, setCourses } from '../courses/actionCreators';
import { courseReducer } from '../courses/reducer';

describe('Courses reducer', () => {
	it('reducer should return the initial state', () => {
		const expectedState = [];
		const testAction = { type: 'TEST' };
		expect(courseReducer(undefined, testAction)).toEqual(expectedState);
	});

	it('reducer should handle SAVE_COURSE and returns new state', () => {
		const previousState = [
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
		];
		const newCourse = {
			id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
			title: 'Test Title',
			description: `Test Description`,
			creationDate: '10/11/2020',
			duration: 210,
			authors: [
				'df32994e-b23d-497c-9e4d-84e4dc02882f',
				'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			],
		};
		expect(courseReducer(previousState, courseAdded(newCourse))).toEqual([
			...previousState,
			newCourse,
		]);
	});

	it('reducer should handle GET_COURSES and returns new state', () => {
		const previousState = [];
		const newCourses = [
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
		];
		const newState = courseReducer(previousState, setCourses(newCourses));
		expect(newState).toEqual(newCourses);
	});
});
