import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./components/pages/Home";
import IpPage from './components/pages/ippage'
import AlgoPage from './components/pages/algopage'
import Footer from './components/Footer'
import Searching from './components/pages/searching'
import Sorting from './components/pages/sorting'
import Dp from './components/pages/dp'
import Graph from './components/pages/graph'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/algopage" exact component={AlgoPage} />
					<Route path="/ippage" exact component={IpPage} />
					<Route exact path="/algopage/sorting" component={Searching}></Route>
					<Route exact path="/algopage/searching" component={Sorting}></Route>
					<Route exact path="/algopage/dp" component={Dp}></Route>
					<Route exact path="/algopage/graph" component={Graph}></Route>
				</Switch>
				<Footer/>
			</Router>
		</>
	);
}

export default App;
