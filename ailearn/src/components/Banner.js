import React from 'react';
import "../assets/Banner.css"
import { Link } from "react-router-dom";


export default function Banner() {
	return (
		<div className="BDiv1">
			<div className="BDiv2">
				<div className="BDiv3">
					<div className="BText1">
						<a>Learn</a>
					</div>
					<div className="BText2">
						<a>How to Use</a>
					</div>
					<div >
						<a>AI and ML</a>
					</div>
				</div>
				<div>
					<div className="BDiv4">
						A field guide 
						to learning AI and ML
					</div>
					<div className="BDiv5">
						<div className="BDiv7">
							Click Here
						</div>
						<div className="BDiv8">
							Or Here
						</div>
					</div>
					<div className="BDiv6">
						The future is bright 
						and it's waiting
					</div>
				</div>
			</div>
		</div>
	);
}