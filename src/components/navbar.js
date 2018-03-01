import React, { Component } from 'react';
import '../styles/NavBar.css';
import { Collapse, Navbar, Nav, NavItem, NavbarToggler, NavbarBrand } from 'reactstrap';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';


export default class NavBar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		console.log(this.state)
		return (
			<Router>
				<div id="nav-bar">
					<Navbar color='dark' dark expand="md" className="fixed-top">
					<NavbarToggler onClick={this.toggle} />
					<NavbarBrand href="/">Andrew Schubert</NavbarBrand>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<br></br>
							<NavItem>
								<a href='https://medium.com/schubiedoobycode' target="_blank" rel="noopener noreferrer">&nbsp; Blog &nbsp;</a>
							</NavItem>
							<NavItem>
								<NavLink to='/news' style={{ textDecoration: 'none', color: 'white' }} onClick={this.toggle}>&nbsp; Resume &nbsp;</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to='#' style={{ textDecoration: 'none', color: 'white' }} onClick={this.toggle}>&nbsp; Contact &nbsp;</NavLink>
							</NavItem>
							<br></br>
						</Nav>
					</Collapse>
					</Navbar>
				</div>
			</Router>
		);
	}
}