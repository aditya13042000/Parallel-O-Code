import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<video src="/videos/video-2.mp4" autoPlay loop muted />
			<h1>PARALLEL-O-CODE</h1>
			<p>Miss.P.Mundada<br></br>Shreyash Mandade<br></br>Aditya Gadadhani<br></br>Abhishek More </p>
		
		</div>
	);
}

export default HeroSection;
