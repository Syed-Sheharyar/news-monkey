import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-dark position-fixed bottom-0" style={{ width: "100%" }}>
			<div className="container p-3 d-flex justify-content-between" style={{ color: "whitesmoke" }}>
				<div className="credits">
					Made by <span style={{ color: "red" }}>❤</span> Syed Sheharyar
				</div>
				<div>
					<a href="#top">
					<span>Back to top</span>
					</a>
					<br />
					<Link to="">
						<span>See code on Github</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
