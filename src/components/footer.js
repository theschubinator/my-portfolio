import React from 'react';

import '../styles/Footer.css';
import myFace from '../media/my-face.png';
import gitHub from '../media/github.png';
import linkedIn from '../media/linkedIn.png';
import Email from '../media/email.png'

const Footer = () => {
	return (
		<div id="footer" className="container-fluid">
			<div className="row">
				<div className="co-sm-12">
					<img id="my-face" src={myFace} alt="Andrew Schubert" />
					<div id="image-1">
						<a  href="https://linkedin.com/in/andrew-schubert" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="Git Hub Logo" /></a>
					</div>
					<div id="image-2">
						<a href="https://github.com/theschubinator" target="_blank" rel="noopener noreferrer"><img src={gitHub} alt="LinkedIn Logo" /></a>
					</div>
					<div id="image-3">
						<a href="mailto:andrew.schubert@1986@gmail.com?Subject=Would love to chat."><img src={Email} alt="Email Logo" /></a>
					</div>
					<div id="phone-number">
						<a href="tel:1-832-784-5666"><p>(832)784-5666</p></a>
					</div>
					<div id="copyright">
						<p>© Andrew Schubert 2018</p>
					</div>
				</div>	
			</div>
		</div>
	)
}

export default Footer;