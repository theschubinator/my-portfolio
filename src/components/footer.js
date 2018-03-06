import React from 'react';

import '../styles/Footer.css';
import myFace from '../media/my-face.png';
import gitHub from '../media/github.png';
import linkedIn from '../media/linkedIn.png';
import Email from '../media/email.png'
import signature from '../media/signature.png';

const Footer = () => {
	return (
		<div id="footer" className="container-fluid">
			<div className="row">
				<div id="personal-info" className="col-sm-12 col-md-6">
					<img id="andrew-schubert" src={myFace} alt="Andrew Schubert" />
					<p id="social-media">
						<img src={linkedIn} alt="linkedIn" />
						<img src={gitHub} alt="github" />
						<img src={Email} alt="email" />
					</p>
					<p id="phone-number">(832)784-5666</p>
				</div>

				<div className="col-sm-12 col-md-6">
					<img id="signature" src={signature} alt="Andrew's signature" />
				</div>
				<div className="col-sm-12">
					<p id="copyright">©Andrew Schubert 2018</p>
				</div>
			</div>
		</div>
	)
}

export default Footer;