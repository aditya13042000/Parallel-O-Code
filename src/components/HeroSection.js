import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<video src="/videos/video-3.webm" autoPlay loop muted />
			<h1>TECHUMEN 2020</h1>
			<p>Where We Compete and Grow </p>
			<p style={{fontSize:'1.5rem'}} >Scroll Down to Checkout the Results!!</p>
			<div className="hero-btns">
				<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" ok="same">
					GET STARTED
				</Button>
				<Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
					onClick={console.log("youtube")}
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
