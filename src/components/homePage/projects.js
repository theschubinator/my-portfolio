import React from 'react';

import '../../styles/Projects.css';
import triviaMaster from '../../media/triviaMaster.png';
import stayInformed from '../../media/stayInformed.png';
import cardCollection from '../../media/cardCollection.png';

const Projects = () => {
	return (
		<div id="projects" className="container">
			<div className="row">
				<div className="col-sm-12">
					<h1>Projects</h1>
					<p>For more information about these projects click <a href="/projects">here</a></p>
				</div>
			</div>
			<div className="row">

				<div className="col-sm-12 col-md-6 project">
					<a href="http://trivia-master.herokuapp.com/" target="_blank" rel="noopener noreferrer">	
						<img className="trivia-master img-fluid" src={triviaMaster} alt="Trivia Master" />
					</a>
				</div>

				<div className="col-sm-12 col-md-6 project">
					<a href="http://stay-informed.herokuapp.com/" target="_blank" rel="noopener noreferrer">
						<img className="img-fluid" src={stayInformed} alt="Trivia Master" />
					</a>	
				</div>

				{/* <div className="col-sm-12 col-md-4 project">
					<a href="#">
						<img className="img-fluid" src={cardCollection} alt="Trivia Master" />
					</a>
				</div> */}

			</div>
		</div>
	)
}

export default Projects;