import React from 'react';
import "../assets/Footer.css"
import logo from '../assets/Logo.png'
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="FDiv1">
			<div className="FDiv2">
				<div className="FDiv3">
					<div className="FDiv4">
						<div className="FDiv5">
							<Link to='/' className="HText">
								<img src={logo} className="logo" alt="logo" />
							</Link>
						</div>
						<div className="FDiv6">
							<div className="FBtn1">
								<a className="FText1">Twitter</a>
							</div>
							<div className="FBtn1">
								<a className="FText1">Github</a>
							</div>
							<div className="FBtn1A">
								<a className="FText1">Linkedin</a>
							</div>
						</div>
					</div>
				</div>
				<div className="FDiv8">
					<p className="FText2">
						© 2023 AI Field Guide. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}