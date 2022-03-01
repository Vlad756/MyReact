export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy text ever since the
   1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type
   specimen book. It has survived 
    not only five centuries, but also the leap into electronic
   COMPONENTS.md 1/4/2022
   3 / 11
   typesetting, remaining essentially u
    nchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy text ever since the
   1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type
   specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];
export const mockedAuthorsList = [
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
];

export const SEARCH_BUTTON_TEXT = 'Search';
export const SEARCH_INPUT_PLACEHOLDER = 'Search...';
export const SHOW_COURSE_BUTTON_TEXT = 'Show course';
export const CREATE_COURSE_BUTTON_TEXT = 'Create Course';
export const UPDATE_COURSE_BUTTON_TEXT = 'Update Course';
export const COURSE_NAME_INPUT_TEXT = 'Course Name';
export const DESCRIPTION_INPUT_PLACEHOLDER = 'Description';
export const AUTOR_NAME_INPUT_PLACEHOLDER = 'Author name';
export const CREATE_AUTHOR_BUTTON_TEXT = 'Create author';
export const DURATION_INPUT_PLACEHOLDER = 'Duration';
export const ADD_AUTHOR_BUTTON_TEXT = 'Add author';
export const DELETE_AUTHOR_BUTTON_TEXT = 'delete author';
export const ADD_NEW_COURSE_BUTTON_TEXT = 'Add new course';
export const MAX_AUTHORS_LENGTH = 40;
export const AUTHORS_SUBSTRING_START = 0;
export const AUTHORS_SUBSTRING_END = 37;

export const DEFAULT_PATH = '/';
export const COURSES_PATH = '/courses';
export const REGISTRATION_PATH = '/registration';
export const LOGIN_PATH = '/login';
export const COURSES_ADD_PATH = '/courses/add';
export const COURSES_UPDATE_PATH = '/courses/update';

export const USER_EMAIL_KEY_NAME = 'email';
export const USER_TOKEN_KEY_NAME = 'token';
export const USER_NAME_KEY_NAME = 'username';
export const ENTER_EMAIL_PLACEHOLDER = 'Enter email';
export const ENTER_PASSWORD_PLACEHOLDER = 'Enter password';
export const LOGIN_BUTTON_TEXT = 'Login';
export const REGISTRATION_BUTTON_TEXT = 'Registration';
export const ENTER_NAME_PLACEHOLDER = 'Enter name';
export const LOGOUT_BUTTON_TEXT = 'Logout';
export const COURSES_ALL_PATH = '/courses/all';
export const AUTHORS_ALL_PATH = '/authors/all';
export const AUTHORS_ADD_PATH = '/authors/add';
export const LOGOUT_PATH = '/logout';
export const USER_ME_PATH = '/users/me';

export const ADMIN_ROLE_NAME = 'admin';
