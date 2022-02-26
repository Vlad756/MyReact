import {
	AUTHORS_ALL_PATH,
	COURSES_ALL_PATH,
	LOGIN_PATH,
	REGISTRATION_PATH,
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

const postRequest = (endpoint, body) => {
	return sendRequest(`${BASE_URL}${endpoint}`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

const getRequest = (endpoint) => {
	return sendRequest(`${BASE_URL}${endpoint}`, {
		method: 'GET',
	});
};

export const loginRequest = (reqBody) => postRequest(LOGIN_PATH, reqBody);

export const registrationRequest = (reqBody) =>
	postRequest(REGISTRATION_PATH, reqBody);

export const fetchCourses = () => getRequest(COURSES_ALL_PATH);

export const fetchAuthors = () => getRequest(AUTHORS_ALL_PATH);
