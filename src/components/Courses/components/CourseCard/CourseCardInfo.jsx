import React from 'react';

export const CourseCardInfo = ({ infoName, value }) => {
	return (
		<p>
			<span className='courseCardInfo'>{infoName}</span> {value}
		</p>
	);
};
