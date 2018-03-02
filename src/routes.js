import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/homePage/index';
import AboutMe from './components/aboutMe/index';

const Routes = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/resume" component={AboutMe} />
			</div>
		</Router>
	);
}

export default Routes;