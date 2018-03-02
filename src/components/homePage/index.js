import React from 'react';

import JumboTron from './jumboTron';
import Mission from './mission';
import Experience from './experience';
import Projects from './projects';

const Home = () => {
	return (
		<div>
			<JumboTron />
			<Mission />
			<Experience />
			<Projects />
		</div>
	);
}

export default Home;