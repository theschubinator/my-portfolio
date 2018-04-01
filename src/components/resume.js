import React from 'react';

import '../styles/Resume.css';
import myResume from '../media/andrew_schubert_resume.pdf';

const Resume = () => {
	return (
		<div id="my-resume">
			<h1 id="top-heading">
				Andrew Schubert's Resume &nbsp;
				<a href={myResume} download><button>Download Resume</button></a>
			</h1>
			<div className="mission-statement">
				<h3 id="resume">832-784-5666 | andrew.schubert1986@gmail.com | andrewschubert.org | Github: theschubinator</h3>
				<p>Full stack web developer with a passion for designing creative, user-friendly web applications. With experience in
					React/Redux, JavaScript, and Ruby on Rails, I discovered an affection for programming through my love of
					technology, knowledge, and passion for challenges. Along with being a self-motivator, I bring strong skills in
					communication, organization, and problem-solving that help advance companies towards their ultimate mission.
				</p>
			</div>


			<div id="tech-projets new-section">
				<h1 className="heading">Technical Projects</h1>
				<div className="section">
					<h3><strong>Card Collector - <a href="https://github.com/theschubinator/card-collecter" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="http://card-collector-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a></strong></h3>
					<p>
						<em>A database system that organizes a collection of trading cards</em> 
					</p>
					<ul>
						<li>Created the API using Rails and the client-side with React, Redux</li>
						<li>Utilized JWT token for user authorization</li>
						<li>Implemented promise based requests to Rails with axios client</li>
					</ul>
				</div>
				<div className="section">
					<h3><strong>Trivia Master - <a href="https://github.com/theschubinator/trivia-master" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="http://trivia-master.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a></strong></h3>
					<p>
						<em>A ‘social’ task-manager that helps individuals and organizations to stay accountable to their tasks</em>
					</p>
					<ul>
						<li>Built the API using Ruby on Rails and the MVC pattern</li>
						<li>Created the client-side with React, Redux, Bootstrap, and CSS</li>
						<li>Designed the database schema and configured ActiveRecord associations</li>
					</ul>
				</div>
				<div className="section">
					<h3><strong>Stay-Informed - <a href="https://github.com/theschubinator/stay-informed" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="http://stay-informed.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a></strong></h3>
					<p>
						<em>A trivia game that tests your knowledge in the areas of sports, science, history, and entertainment</em>
					</p>
					<ul>
						<li>Used Bootstrap and custom CSS to design the front end</li>
						<li>Built the back end using Ruby on Rails and the MVC pattern</li>
						<li>Used OMniAuth for OAuth authentication with Facebook</li>
						<li>Rendered the front-end with JavaScript, and JQuery</li>
					</ul>
				</div>
			</div>


			<div className="tech-skills new-section">
				<h1 className="heading">Technical Skills</h1>
				<div className="section">
					<div className="tech-skills row">
						<div className="col-sm-6">
							<ul>
								<li>Ruby, Ruby on Rails</li>
								<li>JavaScript</li>
								<li>React and Redux</li>
							</ul>
						</div>
						<div className="col-sm-6">
							<ul>
								<li>Git</li>
								<li>Photoshop</li>
								<li>Microsoft Office</li>
							</ul>
						</div>
						<div className="col-sm-12 basic">
							<p><em>Knowedge with Node.js, GraphQL, SQL, and WordPress</em></p>
						</div>
					</div>
				</div>
			</div>


			<div className="employment new-section">
				<h1 className="heading">Employment History</h1>
				<div className="section">
					<h3><strong>Goose Creek Independent School District | Baytown, TX</strong></h3>
					<p>Technology Application Instructor, <em>2015 - Present</em></p>
					<ul>
						<li> Teach a computer curriculum to students in the areas of MS Office, Photoshop, and keyboarding</li>
						<li>Sponsor and lead an after school Bible club</li>
						<li>Coach the 7th grade football team</li>
						<li>Train colleagues on how to troubleshoot their computer related issues</li>
					</ul>
				</div>
				<div className="section">
					<h3><strong>First Baptist Church Hamshire | Hamshire, TX</strong></h3>
					<p>Youth Pastor, <em>2013 - 2015</em></p>
					<ul>
						<li> Created new areas of outreach by designing the church’s website utilizing WordPress</li>
						<li>Created lessons with Photoshop and Premiere that engaged students, saving the church $1,000 yearly</li>
						<li>Managed a yearly budget of $6,000</li>
					</ul>
				</div>
				<div className="section">
					<h3><strong>Forestville Baptist Church | Cincinnati, OH</strong></h3>
					<p>Youth Pastor, <em>2011 - 2013</em></p>
					<ul>
						<li>Created promotional videos and flyers using Adobe Photoshop and Premiere</li>
						<li>Directed a basketball program that included 500 students</li>
						<li>Grew a youth program by communicating daily with individuals through personal contact and social media</li>
					</ul>
				</div>
			</div>

			<div className="education new-section">
				<h1 className="heading">Education</h1>
				<div className="section">
					<p>
						<strong>Flatiron School - </strong><em>2018</em>, Full Stack Web Development, Ruby on Rails and JavaScript online program
					</p>
					<p>
						<strong>Southern Evangelical Seminary - Matthews, NC </strong><em>2008-2011</em>, 42 credits towards Master of Divinity, Apologetics
					</p>
					<p>
						<strong>Maranatha Baptist University - Watertown, WI </strong><em>2018</em>, Bachelor of Arts in Biblical Studies
					</p>
				</div>
			</div>
		</div>			
	);
}

export default Resume;