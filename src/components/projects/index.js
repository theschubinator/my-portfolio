import React from 'react';
import '../../styles/ProjectDescriptions.css';
import triviaMaster from '../../media/triviaMaster.png';
import stayInformed from '../../media/stayInformed.png';
import cardCollection from '../../media/cardCollection.png';
import gitHub from '../../media/github-white.png';

const Index = () => {
	return (
		<div id="projects-page" className="container">
			<div className="row">
				<div className="col-sm-12">
					<h1>Projects</h1>
				</div>

				<div className="row">
					<div className="col-sm-12 col-md-4 project">
						<a href="http://card-collector-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
							<img className="img-fluid" src={cardCollection} alt="Trivia Master" />
							<a href="https://github.com/theschubinator/card-collecter" target="_blank" rel="noopener noreferrer"><img className="github" src={gitHub} alt="Github" /></a>
						</a>	
					</div>
					<div className="col-sm-12 col-md-8">
						<ul>
							<li>Created the API using Rails and the client-side with React, Redux</li>
							<li>Utilized JWT token for user authorization</li>
							<li>Implemented promise based requests to Rails with axios client</li>
						</ul>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 col-md-4 project">
						<a href="http://trivia-master.herokuapp.com/" target="_blank" rel="noopener noreferrer">	
							<img className="trivia-master img-fluid" src={triviaMaster} alt="Trivia Master" />
							<a href="https://github.com/theschubinator/trivia-master" target="_blank" rel="noopener noreferrer"><img className="github" src={gitHub} alt="Github" /></a>
						</a>			
					</div>
					<div className="col-sm-12 col-md-8">
						<ul>
							<li>Built the API using Ruby on Rails and the MVC pattern</li>
							<li>Created the client-side with React, Redux, Bootstrap, and CSS</li>
							<li>Designed the database schema and configured ActiveRecord associations</li>
						</ul>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 col-md-4 project">
						<a href="http://stay-informed.herokuapp.com/" target="_blank" rel="noopener noreferrer">
							<img className="img-fluid" src={stayInformed} alt="Trivia Master" />
							<a href="https://github.com/theschubinator/stay-informed" target="_blank" rel="noopener noreferrer"><img className="github" src={gitHub} alt="Github" /></a>
						</a>	
					</div>
					<div className="col-sm-12 col-md-8">
						<ul>
							<li>Used Bootstrap and custom CSS to design the front end</li>
							<li>Built the back end using Ruby on Rails and the MVC pattern</li>
							<li>Used OMniAuth for OAuth authentication with Facebook</li>
							<li>Rendered the front-end with JavaScript, and JQuery</li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	);
}

export default Index;