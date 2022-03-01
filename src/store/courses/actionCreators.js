import * as actions from './actionTypes';

export const courseAdded = (course) => ({
	type: actions.COURSE_ADDED,
	payload: course,
});

export const courseRemoved = (id) => ({
	type: actions.COURSE_REMOVED,
	payload: id,
});

export const setCourses = (courses) => ({
	type: actions.COURSES_SET_ALL,
	payload: courses,
});

export const courseEdited = (id, course) => ({
	type: actions.COURSES_EDITED,
	payload: {
		id: id,
		course: course,
	},
});
