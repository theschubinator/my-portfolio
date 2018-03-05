import React, { Component } from 'react';
import '../styles/NavBar.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';



class NavBar extends Component {
		constructor(props) {
			super(props);
	
			this.toggle = this.toggle.bind(this);
			this.state = {
				isOpen: false
			};
		}
		toggle() {
			this.setState({
				isOpen: !this.state.isOpen
			});
		}
		render() {
			return (
				<div id="nav-bar">
					<Navbar color="faded" dark expand="md">
						<NavbarBrand href="/">Andrew Schubert</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="/projects">Projects</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/resume">About Me</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="https://medium.com/schubiedoobycode" target="_blank">Blog</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</div>
			);
		}
	}

	export default NavBar;




