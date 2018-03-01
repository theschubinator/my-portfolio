import React from 'react';

import '../styles/Experience.css';
import Ruby from '../media/ruby.png';
import JavaScript from '../media/javascript.png';

import greenCheck from '../media/green_check.png';

const Experience = () => {
	return (
		<div id="experience" className="container">
			<div className="row">

				{/* Ruby */}
				<div className="col-sm-12 col-md-6">
					<div className="col-sm-12 ruby">
						<img src={Ruby} className="img-fluid" alt="Ruby Programming Langauge" />
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
						<img src={JavaScript} className="img-fluid" alt="JavaScript Programming Langauge" />	
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