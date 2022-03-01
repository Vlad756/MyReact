import { addCourse, deleteCourse, updateCourse } from '../../services';
import { courseAdded, courseEdited, courseRemoved } from './actionCreators';

export const uploadCourse = (course) => async (dispatch, getState) => {
	const response = await addCourse(course);
	if (response?.successful) {
		dispatch(courseAdded(course));
	}
};

export const editCourse = (id, course) => async (dispatch, getState) => {
	const response = await updateCourse(id, course);
	if (response?.successful) {
		dispatch(courseEdited(id, course));
	}
};

export const removeCourse = (id) => async (dispatch, getState) => {
	const response = await deleteCourse(id);
	if (response?.successful) {
		dispatch(courseRemoved(id));
	}
};
