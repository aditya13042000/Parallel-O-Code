import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);
	const [, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<>
			<nav className="_navbar">
				<div className="_navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						TECHUMEN
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="_nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						{/*<li className="_nav-item">
							<Link to="/events" className="nav-links" onClick={closeMobileMenu}>
								Events
							</Link>
	</li>*/}
						<li className="_nav-item">
							<a href="/#events" className="nav-links" onClick={closeMobileMenu}>
								Events
							</a>
						</li>
						<li className="_nav-item">
							<Link to="/sponsor" className="nav-links" onClick={closeMobileMenu}>
								Sponsors
							</Link>
						</li>
					</ul>
					{/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
