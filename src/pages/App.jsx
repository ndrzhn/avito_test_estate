import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage.jsx';
import SecondPage from './SecondPage.jsx';

const App = () => (
	<Router>
		<Fragment>
			<Route exact path="/" component={ MainPage } />
			<Route exact path="/item/:id" component={ SecondPage } />
		</Fragment>
	</Router>
);

export default App;