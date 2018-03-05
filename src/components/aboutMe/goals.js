import React from 'react'

import '../../styles/Goals.css';
import Building from '../../media/building.png';
import Thinking from '../../media/thinking.png';
import Computer from '../../media/computer.png';
import Heart from '../../media/heart.png';
import myResume from '/Users/theschubinator/Documents/code/port/src/media/andrew_schubert_resume.pdf';

const Goals = () => {
	return (
		<div id="goals" className="container-fluid">
			<div className="row">
				<div className="col-sm-12">
					<h1>Programming Is My Passion</h1>
				</div>
				<div className="col-sm-12">
					<a href={myResume} download><button>Download Resume</button></a>
				</div>		
			</div>
			<div className="row">
				<div className="col-sm-12 col-xl-4 video">
					<iframe 
						width="560" height="315" 
						src="https://www.youtube.com/embed/3OPzCLPuwHU" 
						frameborder="0" 
						allow="autoplay; encrypted-media" 
						allowfullscreen="allowfullscreen">
					</iframe>
				</div>
				<div className="col-xl-8 right">
					<div className="col-sm-12  passion">
						<img src={Building} alt="Wilis Towers" /> <span>+</span> &nbsp;
						<img src={Thinking} alt="Thinking Person" /> &nbsp;<span>+</span> &nbsp;	
						<img src={Computer} alt="Computer" /> <span>=</span> &nbsp;
						<img src={Heart} alt="Heart" />
					</div>
					<div className="col-sm-12 col-lg-9 passion-summary">
						<p>I <span>love</span> building things!</p>
						<p>I <span>love</span> challenges!</p>
						<p>I <span>love</span> technology!</p>
						<p>The culmination of <strong>EVERYTHING</strong> that I <span>love!</span></p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Goals;