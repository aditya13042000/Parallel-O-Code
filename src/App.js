import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./components/pages/Home";
import IpPage from './components/pages/ip/ippage'
import AlgoPage from './components/pages/algo/algopage'
import Footer from './components/Footer'
import Searching from './components/pages/algo/searching'
import Sorting from './components/pages/algo/sorting'
import Dp from './components/pages/algo/dp'
import Graph from './components/pages/algo/graph'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/algopage" exact component={AlgoPage} />
					<Route path="/ippage" exact component={IpPage} />
					<Route exact path="/algopage/sorting" component={Sorting}></Route>
					<Route exact path="/algopage/searching" component={Searching}></Route>
					<Route exact path="/algopage/dp" component={Dp}></Route>
					<Route exact path="/algopage/graph" component={Graph}></Route>
				</Switch>
				<Footer/>
			</Router>
		</>
	);
}

export default App;
