import React, { useState } from 'react';
import { Divider, Form, Grid } from 'semantic-ui-react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';
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
} from '../../constants';

export default function CreateCourse(props) {
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authorInput, setAuthorInput] = useState();
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [duration, setDuration] = useState(0);
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();

	function timeConvert(n) {
		const num = n > 0 ? n : 0;
		const hours = num / 60;
		const rhours = Math.floor(hours);
		const minutes = (hours - rhours) * 60;
		const rminutes = Math.round(minutes);
		return rhours + ':' + rminutes;
	}

	function handleCreateAuthor(event) {
		event.preventDefault();
		const newAuthors = [...authors, { id: uuidv4(), name: authorInput }];
		setAuthors(newAuthors);
	}

	function handleCreateCourse(event) {
		event.preventDefault();
		if (
			title === '' ||
			description === '' ||
			duration <= 0 ||
			courseAuthors.length <= 0
		) {
			window.alert('Please, fill in all fields');
			return;
		}
		const newCourses = [
			...courses,
			{
				id: uuidv4(),
				title: title,
				description: description,
				creationDate: Date.now(),
				duration: duration,
				authors: courseAuthors,
			},
		];
		setCourses(newCourses);
		console.log(courses);
		props.setSwitcher(false);
	}

	function handleAddAuthor(author, event) {
		event.preventDefault();
		const newCourseAuthors = [...courseAuthors, author];
		setCourseAuthors(newCourseAuthors);
		const newAuthors = authors.filter((x) => x.id !== author.id);
		setAuthors(newAuthors);
	}

	function handleDeleteAuthor(author, event) {
		event.preventDefault();
		const newAuthors = [...authors, author];
		setAuthors(newAuthors);
		const newCourseAuthors = courseAuthors.filter((x) => x.id !== author.id);
		setCourseAuthors(newCourseAuthors);
	}

	return (
		<Form style={{ margin: '5%' }}>
			<p>Title</p>
			<Grid>
				<Grid.Column width={10} floated='left'>
					<Form.Field>
						<Input
							onChange={(e) => setTitle(e.target.value)}
							name='courseNameInput'
							type='text'
							placeholder={COURSE_NAME_INPUT_TEXT}
						/>
					</Form.Field>
				</Grid.Column>
				<Grid.Column width={3} floated='right'>
					<Button
						content={CREATE_COURSE_BUTTON_TEXT}
						onClick={(event) => handleCreateCourse(event)}
					/>
				</Grid.Column>
			</Grid>
			<p>Description</p>
			<Form.Field>
				<textarea
					onChange={(e) => setDescription(e.target.value)}
					name='descriptionTextArea'
					placeholder={DESCRIPTION_INPUT_PLACEHOLDER}
				/>
			</Form.Field>
			<Grid columns={2} relaxed='very' style={{ marginTop: '10px' }}>
				<Grid.Column>
					<h3>Add author</h3>
					<p>Author name</p>
					<Input
						name='authorNameInput'
						placeholder={AUTOR_NAME_INPUT_PLACEHOLDER}
						onChange={(e) => setAuthorInput(e.target.value)}
					/>
					<Button
						content={CREATE_AUTHOR_BUTTON_TEXT}
						onClick={(event) => handleCreateAuthor(event)}
					/>
					<h3>Duration</h3>
					<p>Duration</p>
					<Input
						type='number'
						name='durationInput'
						placeholder={DURATION_INPUT_PLACEHOLDER}
						onChange={(e) => setDuration(e.target.value)}
					/>
					<h2>Duration: {timeConvert(duration)} hours</h2>
				</Grid.Column>
				<Grid.Column>
					<h3>Authors</h3>
					{authors.map((author) => (
						<Grid columns={2} relaxed='very' key={author.id}>
							<Grid.Column>
								<p>{author.name}</p>
							</Grid.Column>
							<Grid.Column>
								<Button
									content={ADD_AUTHOR_BUTTON_TEXT}
									onClick={(event) => handleAddAuthor(author, event)}
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
									onClick={(event) => handleDeleteAuthor(author, event)}
								/>
							</Grid.Column>
						</Grid>
					))}
				</Grid.Column>
			</Grid>
			<Divider vertical hidden />
		</Form>
	);
}
