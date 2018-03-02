import React from 'react';

import Goals from './goals';
import Skills from './skills';

import myResume from '/Users/theschubinator/Documents/code/port/src/media/andrew_schubert_resume.pdf';


const AboutMe = () => {
	return (
		<div>
			<a href={myResume} download><button>Download Resume</button></a>
			<Goals />
			<Skills />
		</div>
	);
}

export default AboutMe;