import React, { useState } from 'react';
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
} from '../../constants';

export const CreateCourse = ({
	setSwitcher,
	authors,
	courses,
	setAuthors,
	setCourses,
}) => {
	const [authorInput, setAuthorInput] = useState();
	const [availableAuthors, setAvailableAuthors] = useState(authors);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [duration, setDuration] = useState(0);
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();

	function timeConvert(n) {
		const num = n > 0 ? n : 0;
		const hours = Math.floor(num / 60);
		const minutes = Math.round((num / 60 - hours) * 60);
		return `${hours}:${minutes}`;
	}

	function handleCreateAuthor() {
		const newAuthor = { id: uuidv4(), name: authorInput };
		setAuthors([...authors, newAuthor]);
		setAvailableAuthors([...availableAuthors, newAuthor]);
	}

	function handleCreateCourse() {
		if (isFormValid()) {
			window.alert('Please, fill in all fields');
			return;
		}
		const newCourses = [
			...courses,
			{
				id: uuidv4(),
				title: title,
				description: description,
				creationDate: new Date().toDateString(),
				duration: duration,
				authors: courseAuthors.map((x) => x.id),
			},
		];
		setCourses(newCourses);
		setSwitcher(false);
	}

	function isFormValid() {
		return (
			title === '' ||
			description === '' ||
			description.length <= 2 ||
			duration <= 0 ||
			courseAuthors.length <= 0
		);
	}

	function handleAddAuthor(author) {
		const newCourseAuthors = [...courseAuthors, author];
		setCourseAuthors(newCourseAuthors);
		const newAuthors = availableAuthors.filter((x) => x.id !== author.id);
		setAvailableAuthors(newAuthors);
	}

	function handleDeleteAuthor(author) {
		const newAuthors = [...availableAuthors, author];
		setAvailableAuthors(newAuthors);
		const newCourseAuthors = courseAuthors.filter((x) => x.id !== author.id);
		setCourseAuthors(newCourseAuthors);
	}

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
						content={CREATE_COURSE_BUTTON_TEXT}
						onClick={(event) => handleCreateCourse(event)}
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
					<h2>Duration: {timeConvert(duration)} hours</h2>
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
};
