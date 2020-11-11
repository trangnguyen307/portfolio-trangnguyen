import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function NavBar () {
    return (
        <div>
            <Navbar expand="lg" className="fixed-top">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about" className= "links" activeClass="active">Moi</Nav.Link>
                        <Nav.Link href="#skills">Compétences</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#projects">Mes projets</Nav.Link>
                        <Nav.Link href="#experience">Experience Professitionelle</Nav.Link>
                        <Nav.Link href="#quote">Quote</Nav.Link>
                    
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
            {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div></div>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav">
                            <li><a href="#about" className="nav-item nav-link active">Moi</a></li>
                            <li><a href="#skills" className="nav-item nav-link">Compétences</a></li>
                            <li><a href="#education" className="nav-item nav-link">Education</a></li>
                            <li><a href="#projects" className="nav-item nav-link">Mes projets</a></li>
                            <li><a href="#experience" className="nav-item nav-link">Experience Professitionelle</a></li>
                            <li><a href="#quote" className="nav-item nav-link">Quote</a></li>

                        </ul>
                    </div>

                </div>
                        
                        
            </nav> */}
        </div>
    )
}
export default NavBar