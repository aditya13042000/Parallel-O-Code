import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className="cards" id="events">
			<h1 className="text-success">Choose Algorithm Type</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="images/cf.jpg"
							text="Codeforces Question 1"
							path="/algopage/cf1"
							
						/>
						<CardItem
							src="images/cf.jpg"
							text="Codeforces Question 2"
							path="/algopage/cf2"
							
						/>
						
					</ul>

					<ul className="cards__items">
						<CardItem
							src="images/cf.jpg"
							text="Codeforces Question 3"
							path="/algopage/cf3"
							
						/>
						<CardItem
							src="images/cc.webp"
							text="Codechef Question 4"
							path="/algopage/cf4"
							
						/>
						
					</ul>

					<ul className="cards__items">
						<CardItem
							src="images/cc.webp"
							text="Codechef Question 5"
							path="/algopage/cf5"
							
						/>
						<CardItem
							src="images/code2.jpg"
							text="Algorithm 1"
							path="/algopage/sorting"
							
						/>
						
					</ul>

					{/* Algorithm will go here */}

					<ul className="cards__items">
						<CardItem
							src="images/code2.jpg"
							text="Algorithm 2"
							path="/algopage/searching"
							
						/>
						<CardItem
							src="images/code1.jpg"
							text="Algorithm 3"
							path="/algopage/sorting"
							
						/>
						
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/code1.jpg"
							text="Algorithm 4"
							path="/algopage/dp"
							
						/>
						<CardItem
							src="images/code2.jpg"
							text="Algorithm 5"
							path="/algopage/graph"
							
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
