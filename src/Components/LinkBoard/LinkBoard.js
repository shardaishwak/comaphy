import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';

import Dashboard from '../Dashboard/Dashboard';
import Maths from '../Maths/Maths';
import Physics from '../Physics/Physics';

class LinkBoard extends PureComponent {
	render() {
		return (
			<div>
				<Sidebar />
				<Switch>
					<Route path="/" exact component={Dashboard} />
					<Route path="/maths" exact component={Maths} />
					<Route path="/physics" exact component={Physics} />
				</Switch>
			</div>
		);
	}
}

export default LinkBoard;
