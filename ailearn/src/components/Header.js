import React from 'react';
import '../assets/Header.css'
import logo from '../assets/Logo.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from "react-router-dom";


export default function Header() {
	return (
		<div className="HDiv1">
			<div className="HDiv2">
				<div className="HDiv3">
					<div className="HDiv5">
						<Link to='/' className="HText">
							<img src={logo} className="logo" alt="logo" />
						</Link>
					</div>
					<div className="HDiv6">
						<div className="HBtn1">
							<Link to='/learn' className="HText">
								<a>Learn</a>
							</Link>
							<ExpandMoreIcon fontSize="small" className="HIcon"/>
						</div>
						<div className="HBtn2">
							<Link to='/resources' className="HText">
								<a>Resources</a>
							</Link>
							<ExpandMoreIcon fontSize="small" className="HIcon"/>
						</div>
						<div className="HBtn2">
							<Link to='/hardware' className="HText">
								<a>Hardware</a>
							</Link>
							<ExpandMoreIcon fontSize="small" className="HIcon"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

