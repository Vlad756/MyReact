import {
	addCourse,
	deleteCourse,
	fetchCourses,
	updateCourse,
} from '../../services';
import {
	courseAdded,
	courseEdited,
	courseRemoved,
	setCourses,
} from './actionCreators';

export const fetchCoursesThunk = () => async (dispatch, getState) => {
	const { courses, user } = getState();
	const { token } = user;
	if (!courses.length) {
		fetchCourses(token).then((data) => {
			if (data && data.successful) {
				dispatch(setCourses(data.result));
			}
		});
	}
};

export const uploadCourseThunk = (course) => async (dispatch, getState) => {
	const { user } = getState();
	const { token } = user;
	const response = await addCourse(course, token);
	if (response?.successful) {
		dispatch(courseAdded(course));
	}
};

export const updateCourseThunk = (id, course) => async (dispatch, getState) => {
	const { user } = getState();
	const { token } = user;
	const response = await updateCourse(id, course, token);
	if (response?.successful) {
		dispatch(courseEdited(response.result));
	}
};

export const deleteCourseThunk = (id) => async (dispatch, getState) => {
	const { user } = getState();
	const { token } = user;
	const response = await deleteCourse(id, token);
	if (response?.successful) {
		dispatch(courseRemoved(id));
	}
};
