import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navb = () => {
	return (
		<Navbar bg='dark' variant='dark' className="sticky-top">
			<Container>
				<Navbar.Brand>Top Movies</Navbar.Brand>
				<Nav>
					<Nav.Link as={Link} to='/'>
						All Movies
					</Nav.Link>
					<Nav.Link as={Link} to='/liked'>
						Liked Movies
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navb;
