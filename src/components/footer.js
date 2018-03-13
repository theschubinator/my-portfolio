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
						<a href="https://www.linkedin.com/in/andrew-schubert/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="linkedIn" /></a>
						<a href="https://github.com/theschubinator" target="_blank" rel="noopener noreferrer"><img src={gitHub} alt="github" /></a>
						<a href="mailto:andrew.schubert1986@gmail.com?Subject=I would love to chat..." target="_top"><img src={Email} alt="email" /></a>
					</p>
					<a href="tel:832-784-5666"><p id="phone-number">(832)784-5666</p></a>
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