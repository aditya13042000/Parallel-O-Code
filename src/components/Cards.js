import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className="cards" id="events">
			<h1 className="text-success">Winners Are Here!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="images/thorat.jpeg"
							text="Gaurav Thorat"
							label="Auslander"
							path="/"
							rank="Winner"
						/>
						<CardItem
							src="images/kanade.jpeg"
							text="Swapnil Kanade"
							label="Auslander"
							path="/"
							rank="Runner Up"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/Hardik.jpeg"
							text="Hardik Aggrawal"
							label="CodeKombat"
							path="/"
							rank="Winner"
						/>
						<CardItem
							src="images/codekombat_runner_up.JPG"
							text="Jatin Garg"
							label="CodeKombat"
							path="/"
							rank="Runner Up"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/pande.jpeg"
							text="Saurabh Pande"
							label="CodeTracer"
							path="/"
							rank="Winner"
						/>
						<CardItem
							src="images/ganesh.jpeg"
							text="Ganesh Kasar"
							label="CodeTracer"
							path="/"
							rank="Runner Up"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/Lavesh.jpeg"
							text="Lavesh Jaykar"
							label="Eliptas"
							path="/"
							rank="Winner"
						/>
						<CardItem
							src="images/Vatsala.jpeg"
							text="Vatsala Singh"
							label="Eliptas"
							path="/"
							rank="Runner Up"
						/>
					</ul>

					<ul className="cards__items">
						<CardItem src="images/farhan.jpg" text="Farhan Syed" label="WebCipher" path="/" rank="Winner" />
						<CardItem
							src="images/sonawane.jpeg"
							text="Sanket Sonawane"
							label="WebCipher"
							path="/"
							rank="Runner Up"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
