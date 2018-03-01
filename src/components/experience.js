import React from 'react';

import '../styles/Experience.css';
import Ruby from '../media/ruby.png';
import JavaScript from '../media/javascript.png';

import greenCheck from '../media/green_check.png';
import rails from '../media/rails.png';
import react from '../media/react.png';
import sql from '../media/sql.png';
import node from '../media/nodeJS.svg';

const Experience = () => {
	return (
		<div id="experience" className="container">
			<div className="row">
				<div className="col-sm-12 lang">
					<h1>Experienced with the Following Frameworks</h1>
					<p><em>Please view my resume for full details</em></p>
					<div className="lang">
						<img src={rails} alt="Ruby On Rails" />
						<img src={react} alt="React.js" />
					</div>
				</div>
			</div>
			<div className="row">
				{/* Ruby */}
				<div className="col-sm-12 col-md-6">
					<div className="col-sm-12 ruby">
						<img src={Ruby} className="img-fluid logo" alt="Ruby Programming Langauge" />
					</div>
					<div className="col-sm-12 col-md-12 pro-con">
						
						<p><img src={greenCheck} />Clear and Easy Langauge To Understand</p>
						<p><img src={greenCheck} />Huge Collection of Third Party Gems</p>
						<p><img src={greenCheck} />Easiest Way To Get An Application Running Quickly</p>
					</div>
				</div>

				{/* JavaScript */}
				<div className="col-sm-12 col-md-6">
					<div className="col-sm-12 java-script">
						<img src={JavaScript} className="img-fluid logo" alt="JavaScript Programming Langauge" />	
					</div>
					<div className="col-sm-12 col-sm-9 pro-con">
						<p><img src={greenCheck} />It's the Programming Langauge of the Web</p>
						<p><img src={greenCheck} />Fast Client-Side Rendering</p>
						<p><img src={greenCheck} />Works Well With Other Langauages</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experience;