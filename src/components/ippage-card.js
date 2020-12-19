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
							text="Image Blurring"
							path="/ippage/blurring"
							
						/>
						<CardItem
							src="images/code1.jpg"
							text="Negation"
							path="/ippage/negation"
							
						/>
						
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/code1.jpg"
							text="Edge Detection"
							path="/ippage/edgedetection"
							
						/>
						<CardItem
							src="images/code2.jpg"
							text="LoG"
							path="/ippage/LoG"
							
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
