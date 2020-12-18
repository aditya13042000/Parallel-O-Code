import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<video src="/videos/video-2.mp4" autoPlay loop muted />
			<h1>PARALLEL-O-CODE</h1>
			<p>Shreyash Mandade<br></br>Aditya Gadadhani<br></br>Abhishek More </p>
			<div className="hero-btns">
				<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" ok="same">
					GET STARTED
				</Button>
				<Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
					ok="youtube">
					<a
						style={{ color: "inherit", textDecoration: "none" }}
						href="https://www.youtube.com/playlist?list=PLTSNssSyrMjmMVTfBs2fsKbzqMR5cynee"
						target="_blank"
						rel="noopener noreferrer">
						{" "}
						WATCH TRAILER{" "}
					</a>{" "}
					<i className="far fa-play-circle"></i>
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
