import * as actions from './actionTypes';

export const courseReducer = (state = [], action) => {
	switch (action.type) {
		case actions.COURSE_ADDED:
			return [...state, action.payload];
		case actions.COURSE_REMOVED:
			return state.filter((course) => course.id !== action.payload);
		case actions.COURSES_SET_ALL:
			return action.payload;
		case actions.COURSES_EDITED:
			return [
				...state.filter((course) => course.id !== action.payload.id),
				action.payload,
			];
		default:
			return state;
	}
};
