import "../assets/Content.css"

export default function Hardware() {
	return (
		<div className="CDiv1">
			<div className="CDiv2">
				<div className="CDiv3">
					Hardware:
				</div>
				<div className="CDiv8">
					Units:
				</div>
				<div className="CDiv4">
					<div className="CDiv5">
						<div className="CText1">
							A100 ----------
						</div>
						<div className="CBtn">
							<a 
							className="link"
							href="https://www.nvidia.com/en-us/data-center/a100/" 
							target="_blank"
							rel="noopener noreferrer"
							>
								Click Here
							</a>
						</div>
					</div>
					<div className="CDiv6">
						<div className="CText1">
							H100 ----------
						</div>
						<div className="CBtn">
							<a 
							className="link"
							href="https://www.nvidia.com/en-us/data-center/h100/" 
							target="_blank"
							rel="noopener noreferrer"
							>
								Click Here
							</a>
						</div>
					</div>
					<div className="CDiv6">
						<div className="CText1">
							4090 ----------
						</div>
						<div className="CBtn">
							<a 
							className="link"
							href="https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/" 
							target="_blank"
							rel="noopener noreferrer"
							>
								Click Here
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>	
	);
}