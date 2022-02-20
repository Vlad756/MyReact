import * as actions from './actionTypes';

export const courseAdded = (course) => {
	return {
		type: actions.COURSE_ADDED,
		payload: {
			course: course,
		},
	};
};

export const courseRemoved = (id) => ({
	type: actions.COURSE_REMOVED,
	payload: {
		id: id,
	},
});

export const setCourses = (arr) => ({
	type: actions.COURSES_SET_ALL,
	payload: {
		courses: arr,
	},
});
