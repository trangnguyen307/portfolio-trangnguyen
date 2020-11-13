import React from 'react';
import ScrollspyNav from "react-scrollspy-nav";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";

import About from './About'
import Skills from './Skills'
import Education from './Education'
import Projects from './Projects'
import Experience from './Experience'
import Quote from './Quote'

function Home () {
    return (
        <HashRouter>
            <div>
                
                <Navbar expand="lg" fixed="top" id="navbar" className="justify-content-center">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
                
                    <ScrollspyNav
                        scrollTargetIds={["about", "skills", "projects", "experience", "education", "quote"]}
                        activeNavClass="is-active"
                        scrollDuration="1000"
                        router="HashRouter"
                        id="scrollspy"
                    >
                        <Navbar.Collapse id="basic-navbar-nav" >
                               
                            <Nav>
                                <NavLink to="#about" is-active="true">Moi</NavLink>
                                <NavLink to="#skills">Compétence</NavLink>
                                <NavLink to="#education">Education</NavLink>
                                <NavLink to="#projects">Mes Projets</NavLink>
                                <NavLink to="#experience">Experience</NavLink>
                                <NavLink to="#quote">Quote</NavLink>
                            </Nav>   


                        </Navbar.Collapse> 
                    </ScrollspyNav>
                    
               
                </Navbar>

                

                <div className="content">
                    <About />
                    <Skills />
                    <Education />
                    <Projects />
                    <Experience />
                    <Quote />
                </div>
            </div>

            <footer className="text-center">
                <a href='#about'>
                    <p>Haut de page</p>
                </a>
                <h5>© 2020 trangnguyen307</h5>
            </footer>
        </HashRouter>
          
    )
}

export default Home;