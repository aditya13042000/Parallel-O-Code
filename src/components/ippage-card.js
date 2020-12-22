import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className="cards" id="events">
			<h1 className="text-success">Choose Image Processing Technique Section</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="gif/negation/superman.gif"
							text="Image Negation"
							path="/ippage/negation"
							
						/>
						<CardItem
							src="gif/blurr/spidey.gif"
							text="Blurring"
							path="/ippage/blurring"
							
						/>
						
					</ul>
					<ul className="cards__items">
						<CardItem
							src="gif/edge/peak.gif"
							text="Edge Detection"
							path="/ippage/edgedetection"
							
						/>
						<CardItem
							src="gif/LoG/thanos.gif"
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
