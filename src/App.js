import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar/Sidebar';

import './Default.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Maths from './Components/Maths/Maths';
import Physics from './Components/Physics/Physics';
import AddSection from './Components/AddSection/AddSection';
import Chemistry from './Components/Chemistry/Chemistry';
import Coding from './Components/Coding/Coding';
import Layout from './Components/Layout/Layout';

class App extends Component {
	state = { Loading: true };

	componentDidMount() {
		this.setState({ Loading: false });
	}
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Route path="/content" render={() => <div>Content</div>} />
					<Sidebar />
					<Switch>
						<Route path="/" exact component={Dashboard} />
						<Route path="/maths" exact component={Maths} />
						<Route path="/physics" exact component={Physics} />
						<Route path="/chemistry" exact component={Chemistry} />
						<Route path="/coding" exact component={Coding} />
						<Route path="/Layout" exact component={Layout} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
