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
	USER_TOKEN_KEY_NAME,
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

const postRequest = async (endpoint, body) => {
	return await sendRequest(`${BASE_URL}${endpoint}`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			Authorization: window.localStorage.getItem(USER_TOKEN_KEY_NAME),
			'Content-Type': 'application/json',
		},
	});
};

const getRequest = async (endpoint) => {
	return await sendRequest(`${BASE_URL}${endpoint}`, {
		method: 'GET',
		headers: {
			Authorization: window.localStorage.getItem(USER_TOKEN_KEY_NAME),
		},
	});
};

const putRequest = async (endpoint, body) => {
	return await sendRequest(`${BASE_URL}${endpoint}`, {
		method: 'PUT',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			Authorization: window.localStorage.getItem(USER_TOKEN_KEY_NAME),
		},
	});
};

const deleteRequest = async (endpoint) => {
	return await sendRequest(`${BASE_URL}${endpoint}`, {
		method: 'DELETE',
		headers: {
			Authorization: window.localStorage.getItem(USER_TOKEN_KEY_NAME),
		},
	});
};

export const loginRequest = (reqBody) => postRequest(LOGIN_PATH, reqBody);

export const registrationRequest = (reqBody) =>
	postRequest(REGISTRATION_PATH, reqBody);

export const fetchCourses = () => getRequest(COURSES_ALL_PATH);

export const fetchAuthors = () => getRequest(AUTHORS_ALL_PATH);

export const addCourse = async (reqBody) =>
	await postRequest(COURSES_ADD_PATH, reqBody);

export const updateCourse = async (id, reqBody) =>
	await putRequest(`${COURSES_PATH}/${id}`, reqBody);

export const addAuthor = (reqBody) => postRequest(AUTHORS_ADD_PATH, reqBody);

export const deleteCourse = async (id) =>
	await deleteRequest(`${COURSES_PATH}/${id}`);

export const logoutRequest = async () => await deleteRequest(LOGOUT_PATH);

export const getCurrentUser = async () => await getRequest(USER_ME_PATH);
