import React from 'react'
import '../../styles/Skills.css';

import Ruby from '../../media/ruby.png';
import JavaScript from '../../media/javascript.png';
import CSSLang from '../../media/css.png';
import Sql from '../../media/sql.png';
import Git from '../../media/github.png';
import Nodejs from '../../media/nodeJS.svg';
import Rails from '../../media/rails.png';
import ReactLogo from '../../media/react.png';

const Skills = () => {
	return (
		<div id="skills" className="container-fluid">
			<div className="row">
				<div className="col-sm-12">
					<h1>Experience</h1>
				</div> 
			</div>

			<div id="logos">
				<span><img id='test' src={Ruby} className="img-thumbnail card-1" /><span id="display-text">Ruby</span></span>
				<span><img src={Sql} className="img-thumbnail card-2"/><span id="display-text">SQL</span></span>
				<span><img src={Rails} className="img-thumbnail card-3"/><span id="display-text">Rails</span></span>
				<span><img src={JavaScript} className="img-thumbnail card-4"/><span id="display-text">JavaScript</span></span>
				<span><img src={Nodejs} className="img-thumbnail card-5"/><span id="display-text">Nodejs</span></span>
				<span><img src={ReactLogo} className="img-thumbnail card-6"/><span id="display-text">React</span></span>
				<span><img src={CSSLang} className="img-thumbnail card-7"/><span id="display-text">CSS</span></span>
			</div>

			<div id="some-div">
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
  
  <span id="some-element">
   test
  </span>
</div>

		</div>
	);
}

export default Skills;




	{/* <ul>
		<li>Ruby, Ruby On Rails</li>
		<li>JavaScript</li>
		<li>React, Redux</li>
		<li>Git</li>
		<li>Microsoft Office</li>
		<li>Adbobe Photoshop, Premiere</li>
		<li>Node.js</li>
		<li>SQL</li>
		<li>WordPress</li>
	</ul> */}