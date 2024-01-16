import React from 'react';
import "../assets/Content.css"
import { Link } from "react-router-dom";

export default function Content() {
	return (
		<div className="CDiv1">
			<div className="CDiv2">
				<div className="CDiv3">
					Where to get started:
				</div>
				<div className="CDiv4">
					<div className="CDiv5">
						<div className="CText1">
							Learn ---------------
						</div>
						<div className="CBtn">
							<Link to='/learn' className="link">
								<a>Click Here</a>
							</Link>
						</div>
					</div>
					<div className="CDiv6">
						<div className="CText1">
							Resources ----------
						</div>
						<div className="CBtn">
							<Link to='/resources' className="link">
								<a>Click Here</a>
							</Link>
						</div>
					</div>
					<div className="CDiv7">
						<div className="CText1">
							Hardware -----------
						</div>
						<div className="CBtn">
							<Link to='/hardware' className="link">
								<a>Click Here</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}