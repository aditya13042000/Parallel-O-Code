import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer-container">
			<section class="social-media">
				<div class="social-media-wrap">
					<div class="footer-logo">
						<a href="https://wceacses.org/" className="social-logo" style={{ letterSpacing: "5px" }}>
							ACSES
						</a>
					</div>
					<small class="website-rights">TECHUMEN © 2020</small>
					<div class="social-icons">
						<a
							class="social-icon-link facebook"
							href="https://www.facebook.com/WCEACSES"
							rel="noopener noreferrer"
							target="_blank"
							aria-label="Facebook">
							<i class="fab fa-facebook-f" />
						</a>
						<a
							class="social-icon-link instagram"
							href="https://www.instagram.com/wceacses/?igshid=1oa8220mfdfdy"
							rel="noopener noreferrer"
							target="_blank"
							aria-label="Instagram">
							<i class="fab fa-instagram" />
						</a>
						<a
							class="social-icon-link youtube"
							href="https://www.youtube.com/channel/UCzUmq_7B3CEMiS2br9T9zLA"
							rel="noopener noreferrer"
							target="_blank"
							aria-label="Youtube">
							<i class="fab fa-youtube" />
						</a>
						<a
							class="social-icon-link twitter"
							href="https://twitter.com/wceacses"
							rel="noopener noreferrer"
							target="_blank"
							aria-label="Twitter">
							<i class="fab fa-twitter" />
						</a>
						<a
							class="social-icon-link twitter"
							href="https://www.linkedin.com/company/wceacses/"
							rel="noopener noreferrer"
							target="_blank"
							aria-label="LinkedIn">
							<i class="fab fa-linkedin" />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
