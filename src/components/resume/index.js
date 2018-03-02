import React from 'react';

import Goals from './goals';
import Projects from './projects';
import Skills from './skills';
import History from './history'
import Education from './education';

import myResume from '/Users/theschubinator/Documents/code/port/src/media/andrew_schubert_resume.pdf';


const Resume = () => {
	return (
		<div>
			<a href={myResume} download><button>Download Resume</button></a>
			<Goals />
			<Projects />
			<Skills />
			<History />
			<Education />
		</div>
	);
}

export default Resume;