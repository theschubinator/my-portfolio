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
							<li>Built the API using Ruby on Rails and the MVC pattern</li>
							<li>Created the client-side with React, Redux, Bootstrap, and CSS</li>
							<li>Designed the database schema and configured ActiveRecord associations</li>
						</ul>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 col-md-4 project">
						<a href="https://github.com/theschubinator/card_collection" target="_blank" rel="noopener noreferrer">
							<img className="img-fluid" src={cardCollection} alt="Trivia Master" />
							<a href="https://github.com/theschubinator/card_collection" target="_blank" rel="noopener noreferrer"><img className="github" src={gitHub} alt="Github" /></a>
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

			</div>
		</div>
	);
}

export default Index;