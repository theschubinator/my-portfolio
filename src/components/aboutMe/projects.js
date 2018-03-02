import React from 'react'

const Projects = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-12">
					<h1>Technical Projects</h1>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-4">
					<h3>Trivia Master</h3>
					<p>
						A trivia game that tests your knowledge in the areas of sports, science, history, and entertainment
					</p>
					<ul>
						<li>Built the API using Ruby on Rails and the MVC pattern</li>
						<li>Created the client-side with React, Redux, Bootstrap, and CSS</li>
						<li>Designed the database schema and configured ActiveRecord associations</li>
					</ul>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-4">
					<h3>Stay Informed</h3>
					<p>
						A ‘social’ task-manager that helps individuals and organizations to stay accountable to their tasks
					</p>
					<ul>
						<li>Used Bootstrap and custom CSS to design the front end</li>
						<li>Built the back end using Ruby on Rails and the MVC pattern</li>
						<li>Used OMniAuth for OAuth authentication with Facebook</li>
						<li>Rendered the front-end with JavaScript, and JQuery</li>
					</ul>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-4">
					<h3>Card Collection</h3>
					<p>
						A database system that organizes a collection of trading cards
					</p>
					<ul>
						<li>Used Sinatra to build the MVC application</li>
						<li>Designed the database with ActiveRecord associations</li>
					</ul>
				</div>

			</div>
		</div>
	);
}

export default Projects;