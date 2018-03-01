import React from 'react';

import ProfilePic from '../media/me.jpg';
import '../styles/JumboTron.css';

const JumboTron = () => {
	return (
		<div className="jumbotron">
			<h1 className="lead">Web Developer</h1>
			<img id="profile-picture" className="img-fluid" src={ProfilePic} alt="Profile Picture" />
		</div>

		
	);
}

export default JumboTron;