import React from 'react'
import '../../styles/Skills.css';

import js from '../../media/js.png';
import CSSLang from '../../media/css.png';
import Sql from '../../media/sql.png';
import Nodejs from '../../media/node.png';
import Rails from '../../media/rails.png';
import ReactLogo from '../../media/react.png';


const Skills = () => {
	return (
		<div id="skills" className="container-fluid">
			<div className="row">
				<div className="col-sm-12">
					<h1>Technical Skills</h1>
				</div> 
			</div>
			<div className="row">
	
					<div className="col-sm-12 col-md-4 logo">
					<span>
						<img src={js} alt="javaScript"className="img-thumbnail card-4"/>
						<span id="display-text">
						<div className="col-sm-8 col-md-12 description logo-1">
								<p>
									Qualified at writing <em>pure</em> JavaScript to manipulate
									the DOM for the purpose of creating interactive web applications.
								</p>
							</div>
						</span>
					</span>
				</div>

				<div className="col-sm-12 col-md-4 logo">
					<span>
						<img src={ReactLogo} alt="React" className="img-thumbnail card-6"/>
						<span id="display-text">
						<div className="col-sm-8 col-md-12 description logo-2">
							<p>
								<strong>I love working with React!</strong> It is my favorite framework to work with.
							</p>
						</div>
						</span>
					</span>
				</div>

				<div className="col-sm-12 col-md-4 logo">
					<span>
						<img src={Nodejs} alt="Node.js" className="img-thumbnail card-5"/>
						<span id="display-text">
							<div className="col-sm-8 col-md-12 description logo-3">
								<p>Some experience with Node.js and its ability to serve up
									back-end applications.
								</p>
							</div>
						</span>
					</span>
				</div>

				<div className="col-sm-12 col-md-4 logo bottom">
					<span>
						<img src={Rails} alt="Rails" className="img-thumbnail card-3"/>
						<span id="display-text">
							<div className="col-sm-8 col-md-12 description logo-4">
								<p>A profecient Rubiest, with knowledge of MVC and Restful standards, I am able to
									create effecient back-end applications utilizing Ruby on Rails. 
								</p>
							</div>
						</span>
					</span>
				</div>

				<div className="col-sm-12 col-md-4 logo bottom">
					<span>
						<img src={Sql} alt="Sql" className="img-thumbnail card-2"/>
						<span id="display-text">
							<div className="col-sm-8 col-md-12 description logo-5">
								<p>Some understanding of SQL, and its ability to query databases for information.
								</p>
							</div>
						</span>
					</span>
				</div>

				<div className="col-sm-12 col-md-4 logo bottom">
					<span>
						<img src={CSSLang} alt="CSS" className="img-thumbnail card-7"/>
						<span id="display-text">
							<div className="col-sm-8 col-md-12 description logo-6">
								<p>
									Experienced with bootstrap, the box-model, and being able to manipulate elements
									that gives every application the design it deserves.
								</p>
							</div>
						</span>
					</span>
				</div>

			</div>
		</div>
	);
}

export default Skills;