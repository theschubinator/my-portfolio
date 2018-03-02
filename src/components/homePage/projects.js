import React from 'react';

import '../../styles/Projects.css';
import Rails from "../../media/rails.png"

const Projects = () => {
	return (
		<div id="projects" className="container">
			<div className="row">
				<div className="col-sm-12">
					<h1>Projects</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12 col-md-4">
					<img id="trivia-master" className="img-fluid" src={Rails} alt="Trivia Master" />
					<a href="http://trivia-master.herokuapp.com/" target="_blank" rel="noopener noreferrer"><h3>Trivia Master</h3></a>
				</div>
				<div className="col-sm-12 col-md-4">
					<img id="trivia-master" className="img-fluid" src={Rails} alt="Trivia Master" />
					<a href="http://stay-informed.herokuapp.com/" target="_blank" rel="noopener noreferrer"><h3>Stay Informed</h3></a>
				</div>
				<div className="col-sm-12 col-md-4">
					<img id="trivia-master" className="img-fluid" src={Rails} alt="Trivia Master" />
					<a href="#"><h3>Card Collector</h3></a>
				</div>
			</div>
		</div>
	)
}

export default Projects;