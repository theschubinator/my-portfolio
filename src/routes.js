import React from 'react';
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';

import Home from './components/homePage/index';
import AboutMe from './components/aboutMe/index';
import Projects from './components/projects/index';
import Resume from './components/resume';
import PageNotFound from './components/pageNotFound';

const Routes = () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about-me" component={AboutMe} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/resume" component={Resume} />
				<Route component={PageNotFound} />
			</Switch>
		</HashRouter>
	);
}

export default Routes;	