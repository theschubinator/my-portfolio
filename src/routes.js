import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/homePage/index';
import Resume from './components/resume/index';

const Routes = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/resume" component={Resume} />
			</div>
		</Router>
	);
}

export default Routes;