import React from 'react';

import ProfilePic from '../../media/me.jpg';
import '../../styles/JumboTron.css';

const JumboTron = () => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<img id="profile-picture" className="img-fluid" src={ProfilePic} alt="Profile" />
		</div>

		
	);
}

export default JumboTron;