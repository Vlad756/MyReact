import React from 'react';

export const CourseCardInfo = ({ infoName, value }) => {
	return (
		<p>
			<span>{infoName}</span> {value}
		</p>
	);
};
