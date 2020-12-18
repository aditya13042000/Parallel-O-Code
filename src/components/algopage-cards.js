import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className="cards" id="events">
			<h1 className="text-success">Choose Section</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="images/code2.jpg"
							text="Searching Algorithms"
							path="/algopage/searching"
							
						/>
						<CardItem
							src="images/code1.jpg"
							text="Sorting Algorithms"
							path="/algopage/sorting"
							
						/>
						
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/code1.jpg"
							text="Dynamic Programming"
							path="/algopage/dp"
							
						/>
						<CardItem
							src="images/code2.jpg"
							text="Graph Algorithms"
							path="/algopage/graph"
							
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
