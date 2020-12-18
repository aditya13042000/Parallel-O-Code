import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from "./components/pages/Contact";
import EventPage from "./components/pages/EventPage";
import Login from "./components/pages/Login";
import Sponsor from './components/pages/sponsor'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />

					<Route path="/events/" component={EventPage} />
					<Route path="/contact" component={Contact} />
					<Route path="/login" component={Login} />
					<Route path="/sponsor" component={Sponsor} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
