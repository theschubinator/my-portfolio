import React from 'react';

import '../styles/Footer.css';
import myFace from '../media/my-face.png';

const Footer = () => {
	return (
		<div id="footer" className="container">
			<div className="row">
				<div className="col-sm-12">
					<img id="my-face" src={myFace} alt="Picture of Andrew Schubert" />
				</div>
				<div className="col-sm-12">
				</div>
			</div>
		</div>
	)
}

export default Footer;