import React, { useEffect, useState } from 'react';
import { Divider, Form, Grid } from 'semantic-ui-react';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { v4 as uuidv4 } from 'uuid';
import {
	COURSE_NAME_INPUT_TEXT,
	CREATE_COURSE_BUTTON_TEXT,
	DESCRIPTION_INPUT_PLACEHOLDER,
	AUTOR_NAME_INPUT_PLACEHOLDER,
	CREATE_AUTHOR_BUTTON_TEXT,
	DURATION_INPUT_PLACEHOLDER,
	ADD_AUTHOR_BUTTON_TEXT,
	DELETE_AUTHOR_BUTTON_TEXT,
	COURSES_PATH,
	LOGIN_PATH,
	UPDATE_COURSE_BUTTON_TEXT,
} from '../../constants';
import { convertMinutesToHoursMinutes } from '../../helpers/MinutesToHoursMinutesConverter';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectAuthors,
	selectCourses,
	selectUser,
} from '../../store/selectors';
import {
	fetchAuthorsThunk,
	uploadAuthorThunk,
} from '../../store/authors/thunk';
import {
	fetchCoursesThunk,
	updateCourseThunk,
	uploadCourseThunk,
} from '../../store/courses/thunk';

export const CourseForm = () => {
	const { isAuth } = useSelector(selectUser);
	const authors = useSelector(selectAuthors);
	const courses = useSelector(selectCourses);
	const [authorInput, setAuthorInput] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [duration, setDuration] = useState(0);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const availableAuthors = authors.filter(
		(author) => !courseAuthors.includes(author)
	);
	const { id } = useParams();

	const handleCreateAuthor = () => {
		const newAuthor = { id: uuidv4(), name: authorInput };
		dispatch(uploadAuthorThunk(newAuthor));
	};

	const handleCreateCourse = () => {
		if (isFormValid()) {
			window.alert('Please, fill in all fields');
			return;
		}
		dispatch(
			uploadCourseThunk({
				title: title,
				description: description,
				duration: Number(duration),
				authors: courseAuthors.map((x) => x.id),
			})
		);
		navigate(COURSES_PATH);
	};

	const handleUpdateCourse = () => {
		if (isFormValid()) {
			window.alert('Please, fill in all fields');
			return;
		}
		dispatch(
			updateCourseThunk(id, {
				title: title,
				description: description,
				duration: Number(duration),
				authors: courseAuthors.map((x) => x.id),
			})
		);
		navigate(COURSES_PATH);
	};

	const isFormValid = () => {
		return (
			title === '' ||
			description === '' ||
			description.length <= 2 ||
			duration <= 0 ||
			courseAuthors.length <= 0
		);
	};

	const addAuthorToCourse = (author) => {
		const newCourseAuthors = [...courseAuthors, author];
		setCourseAuthors(newCourseAuthors);
	};

	const removeAuthorFromCourse = (author) => {
		const newCourseAuthors = courseAuthors.filter((x) => x.id !== author.id);
		setCourseAuthors(newCourseAuthors);
	};

	useEffect(() => {
		if (isAuth) {
			dispatch(fetchAuthorsThunk());
			dispatch(fetchCoursesThunk());
		} else {
			navigate(LOGIN_PATH);
		}
	}, [isAuth, dispatch, navigate]);

	useEffect(() => {
		if (id) {
			const course = courses?.find((c) => c.id === id);
			if (course) {
				setDescription(course.description);
				setDuration(course.duration);
				setTitle(course.title);
				setCourseAuthors(authors?.filter((a) => course.authors.includes(a.id)));
			}
		}
	}, [authors, id, courses]);

	return (
		<Form className='createCourseForm'>
			<p>Title</p>
			<Grid>
				<Grid.Column width={10} floated='left'>
					<Form.Field>
						<Input
							onChange={(e) => setTitle(e.target.value)}
							type='text'
							placeholder={COURSE_NAME_INPUT_TEXT}
							value={title}
						/>
					</Form.Field>
				</Grid.Column>
				<Grid.Column width={3} floated='right'>
					<Button
						content={id ? UPDATE_COURSE_BUTTON_TEXT : CREATE_COURSE_BUTTON_TEXT}
						onClick={(event) =>
							id ? handleUpdateCourse(event) : handleCreateCourse(event)
						}
					/>
				</Grid.Column>
			</Grid>
			<p>Description</p>
			<Form.Field>
				<textarea
					onChange={(e) => setDescription(e.target.value)}
					placeholder={DESCRIPTION_INPUT_PLACEHOLDER}
					value={description}
				/>
			</Form.Field>
			<Grid columns={2} relaxed='very' className='createCourseInfo'>
				<Grid.Column>
					<h3>Add author</h3>
					<p>Author name</p>
					<Input
						placeholder={AUTOR_NAME_INPUT_PLACEHOLDER}
						onChange={(e) => setAuthorInput(e.target.value)}
						value={authorInput}
					/>
					<Button
						content={CREATE_AUTHOR_BUTTON_TEXT}
						onClick={(event) => handleCreateAuthor(event)}
					/>
					<h3>Duration</h3>
					<p>Duration</p>
					<Input
						type='number'
						placeholder={DURATION_INPUT_PLACEHOLDER}
						onChange={(e) => setDuration(e.target.value)}
						value={duration}
					/>
					<h2>Duration: {convertMinutesToHoursMinutes(duration)} hours</h2>
				</Grid.Column>
				<Grid.Column>
					<h3>Authors</h3>
					{availableAuthors.map((author) => (
						<Grid columns={2} relaxed='very' key={author.id}>
							<Grid.Column>
								<p>{author.name}</p>
							</Grid.Column>
							<Grid.Column>
								<Button
									content={ADD_AUTHOR_BUTTON_TEXT}
									onClick={(event) => addAuthorToCourse(author, event)}
								/>
							</Grid.Column>
						</Grid>
					))}
					<h3>Course authors</h3>
					{courseAuthors.map((author) => (
						<Grid columns={2} relaxed='very' key={author.id}>
							<Grid.Column>
								<p>{author.name}</p>
							</Grid.Column>
							<Grid.Column>
								<Button
									content={DELETE_AUTHOR_BUTTON_TEXT}
									onClick={(event) => removeAuthorFromCourse(author, event)}
								/>
							</Grid.Column>
						</Grid>
					))}
				</Grid.Column>
			</Grid>
			<Divider vertical hidden />
		</Form>
	);
};
