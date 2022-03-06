import {
	AUTHORS_ADD_PATH,
	AUTHORS_ALL_PATH,
	COURSES_ADD_PATH,
	COURSES_ALL_PATH,
	COURSES_PATH,
	LOGIN_PATH,
	LOGOUT_PATH,
	REGISTRATION_PATH,
	USER_ME_PATH,
} from './constants';

const BASE_URL = 'http://localhost:3000';

const sendRequest = async (url, body) => {
	try {
		const response = await fetch(url, body);
		if (response.ok) {
			return await response.json();
		}
	} catch (e) {
		console.error(`Error sending request: ${e}`);
	}
};

const postRequest = async (endpoint, body, token) => {
	return await sendRequest(`${BASE_URL}${endpoint}`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			Authorization: token,
			'Content-Type': 'application/json',
		},
	});
};

const getRequest = async (endpoint, token) => {
	return await sendRequest(`${BASE_URL}${endpoint}`, {
		method: 'GET',
		headers: {
			Authorization: token,
		},
	});
};

const putRequest = async (endpoint, body, token) => {
	return await sendRequest(`${BASE_URL}${endpoint}`, {
		method: 'PUT',
		body: JSON.stringify(body),
		headers: {
			Authorization: token,
			'Content-Type': 'application/json',
		},
	});
};

const deleteRequest = async (endpoint, token) => {
	return await sendRequest(`${BASE_URL}${endpoint}`, {
		method: 'DELETE',
		headers: {
			Authorization: token,
		},
	});
};

export const loginRequest = (reqBody, token) =>
	postRequest(LOGIN_PATH, reqBody, token);

export const registrationRequest = (reqBody, token) =>
	postRequest(REGISTRATION_PATH, reqBody, token);

export const fetchCourses = (token) => getRequest(COURSES_ALL_PATH, token);

export const fetchAuthors = (token) => getRequest(AUTHORS_ALL_PATH, token);

export const addCourse = (reqBody, token) =>
	postRequest(COURSES_ADD_PATH, reqBody, token);

export const updateCourse = (id, reqBody, token) =>
	putRequest(`${COURSES_PATH}/${id}`, reqBody, token);

export const addAuthor = (reqBody, token) =>
	postRequest(AUTHORS_ADD_PATH, reqBody, token);

export const deleteCourse = (id, token) =>
	deleteRequest(`${COURSES_PATH}/${id}`, token);

export const logoutRequest = (token) => deleteRequest(LOGOUT_PATH, token);

export const getCurrentUser = (token) => getRequest(USER_ME_PATH, token);
