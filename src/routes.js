import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/homePage/index';
import AboutMe from './components/aboutMe/index';
import Projects from './components/projects/index';
import Resume from './components/resume';

const Routes = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/about-me" component={AboutMe} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/resume" component={Resume} />
			</div>
		</Router>
	);
}

export default Routes;