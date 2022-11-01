import React from 'react' ;
import './Header.css'
import {Navbar,Container,Nav} from 'react-bootstrap' ;
import logo from '../../assets/logo.png';

function Header() {
    return (
        <div>
            <nav>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src = {logo} className = 'logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#programs">Programs</Nav.Link>
                        <Nav.Link href="#whyUs">Why Us</Nav.Link>
                        <Nav.Link href="#plans">Plans</Nav.Link>
                        <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </nav>
        </div>
    )
}

export default Header