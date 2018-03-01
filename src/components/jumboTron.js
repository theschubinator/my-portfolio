import React from 'react';

import ProfilePic from '../media/me.jpg';
import '../styles/JumboTron.css';

const JumboTron = () => {
	return (
		<div id="test" className="container">
			<div className="row test">
				<div className="col-sm-12">
					<img id="profile-picture" className="img-fluid" src={ProfilePic} alt="Profile Picture" />
					<h1 className="job-position">Web Developer</h1>
				</div>
			</div>
		</div>
	);
}

export default JumboTron;