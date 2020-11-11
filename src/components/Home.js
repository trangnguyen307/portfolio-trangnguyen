import React from 'react'
import Carousel from 'react-bootstrap/Carousel' 

import NavBar from './Navbar'


function Home () {
    return (
        <div>
            <NavBar />
            
            <section id='about' className="container-fluid">
                <div className="col-xs-8 col-lg-4 profile-picture">
                    <img src='images/avatar.jpeg' className="rounded-circle" />
                </div>
                <div className="heading">
                    <h1>Thi-Trang NGUYEN</h1>
                    <h3>Développeuse Web Fullstack Junior</h3>
                    <div>
                        <a href="https://github.com/trangnguyen307" target="blank" className="github"><i className="fab fa-github icon"></i></a>
                        <a href="https://www.linkedin.com/in/trangnguyen307/" target="blank" className="linkedin"><i className="fab fa-linkedin-in icon "></i></a>
                    </div>
                    
                </div>
                
            </section>

            <section id="skills">
                <div className="red-divider"></div>
                <div className="heading">
                    <h2>Compétences</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90%" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                    <h5>HTML/CSS 90%</h5>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="85%" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>
                                    <h5>JAVASCRIP 85%</h5>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80%" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                    <h5>BOOTSTRAP 80%</h5>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-lg-4">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70%" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                    <h5>NODEJS 70%</h5>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70%" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                    <h5>MONGODB 70%</h5>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="50%" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}>
                                    <h5>REACTJS 50%</h5>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-lg-4">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70%" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                    <h5>GIT/GITHUB 70%</h5>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80%" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                    <h5>VISUAL STUFIO CODE 80%</h5>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80%" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                    <h5>WINDOWS &#155;=7 80%</h5>
                                </div>
                            </div>
                        </div>
            
                    </div>

                </div>
            </section>

            <section id="education">
                <div className="container">
                    <div className="white-divider"></div>
                <div className="heading">
                    <h2>Education</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                            <div className="education-block">
                                <h5>6/2020-12/2020</h5>
                                <img src="images/graduate.svg" />
                                <div className="title">
                                    <h3>Ironhack</h3>
                                    <h4>Titre RNCP niveau 6 (BAC +3/+4)-Web développement Fullstack</h4>
                                </div>
                                
                                <div className="red-divider"></div>
                                <p>HTML/CSS, JavaScript, Bootstrap</p>
                                <p>NodeJS, ExpressJS, MongoDB/Mongoose</p>
                                <p className="last-item">ReactJS</p>
                            </div>
                        
                    </div>
                        <div className="col-lg-4">
                            <div className="education-block">
                                <h5>1/2020-6/2020</h5>
                                <img src="images/graduate.svg" />
                                <div className="title">
                                    <h3>Université Paris-Est Créteil (UPEC)</h3>
                                    <h4>Diplôme universitaire d'études français</h4>
                                </div>
                                <div className="red-divider"></div>
                                <p className="last-item">Niveau avancé B2</p>
                            </div>  
                    </div>
                    <div className="col-lg-4">
                            <div className="education-block">
                                <h5>2010-2014</h5>
                                <img src="images/graduate.svg" />
                                <div className="title">
                                        <h3>Ecole supérieure de Banque, Hanoi (Vietnam)</h3>
                                        <h4>Diplôme universitaire <br />BAC+4</h4>
                                </div>
                                <div className="red-divider"></div>
                                <p>Gestion d'entreprise</p>
                                <p className="last-item">Mention: Très bien</p>
                            </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            </section>

            <section id='projects'>
                <div className='container'>
                    <div className="red-divider"></div>
                    <div className="heading">
                        <h2>Mes projets</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-5 project-block">
                            <a className="thumbnail" href="https://backtolife.herokuapp.com/" target="blank">
                                <img src='images/project2.png' alt='Projet 2'/>
                            </a>
                            <div>  
                                <h5>Un site de troc pour donner une seconde vie à vous vieux objets</h5> 
                                <p>
                                    <span>Stack:</span> NodeJS/ExpressJS, Handlebars, MongoDB/Mongoose, HTML/CSS, Bootstrap 4, Git/GitHub, Heroku, VS Code   
                                </p>    
                            </div>
                        </div>
                        <div className="col-lg-5 project-block">
                            <a className="thumbnail" href="https://trangnguyen307.github.io/Spot-it-Game/" target="blank">
                                <img src='images/project1.png' alt='Projet 1'/>
                            </a>
                            <div> 
                                <h5>Jeu en JavaScript « Spot-it!»</h5>
                                <p>
                                    <span>Stack</span> : HTML/CSS, JavaScript (DOM, Canvas), Git/GitHub, VS Code
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section id = "experience">
                <div className="white-divider"></div>
                <div className="heading">
                    <h2>Expérience Professitionelle</h2>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-badge"><img src="images/work-24px.svg"/></div>
                        <div className="timeline-panel-container">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3>Boulangerie Au Péché Mignon </h3>
                                    <h4>Vendeuse - CDI</h4>
                                    <p className="text-muted"><small><img src="images/schedule.svg" /></small> 2/2019-2/2020</p>
                                </div>
                                <div className="timeline-body">
                                    <p>Accueil et prise en charge des clients, conseil client</p>
                                    <p>Gestion de la caisse</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-badge"><img src="images/work-24px.svg" /></div>
                        <div className="timeline-panel-container-inverted">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3>Club Med </h3>
                                    <h4>Assistante Comptable - Stage</h4>
                                    <p className="text-muted"><small><img src="images/schedule.svg" /></small> 6/2018-9/2018</p>
                                </div>
                                <div className="timeline-body">
                                    <p> Comptabilisation des écritures quotidiennes de comptabilité générale dans un logiciel Oracle</p>
                                    <p>Facturation d’inter-sociétée</p>
                                    <p>Réalisation des analyses de comptes mensuelles</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-badge"><img src="images/work-24px.svg"/></div>
                        <div className="timeline-panel-container">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3>Crédit Agricole Consumer Finance </h3>
                                    <h4>Administrateur - CDD</h4>
                                    <p className="text-muted"><small><img src="images/schedule.svg" /></small> 7/2017-9/2017</p>
                                </div>
                                <div className="timeline-body">
                                    <p>Traitement et suivi des dossiers de client grâce au système informatique du département</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-badge"><img src="images/work-24px.svg"/></div>
                        <div className="timeline-panel-container-inverted">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3>Société Phuong Anh (Vietnam) </h3>
                                    <h4>Chargée d'affaire - CDI</h4>
                                    <p className="text-muted"><small><img src="images/schedule.svg" /></small> 7/2015-7/2016</p>
                                </div>
                                <div className="timeline-body">
                                    <p> Étudier les appels d’offres, prospecter de nouveaux clients en termes de faisabilité et rentabilité</p>
                                    <p>Participer aux stratégies de marketing et de vente au marché à Hanoi</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

            <section id="quote">
                <div className="container">
                    <div className="red-divider"></div>
                    <div className="heading">
                        <h2>Quote</h2>
                    </div>
                    <Carousel id="myCarousel">
                        <Carousel.Item interval={10000} className="carousel-item">
                            <h3>"There is no meaningless effort, just try your best or not.<br  />
                                There is no such thing as too late,
                                but you dare to change"
                            </h3>
                            <p>- trangnguyen307 -</p>
                        </Carousel.Item>
                        <Carousel.Item interval={10000} className="carousel-item">
                            <h3>"Never dream for "success". Work for it"</h3>
                            <p>- Harsh Dwivedi -</p>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item"> 
                            <h3>“Accept yourself, love yourself, and keep moving forward.<br  />If you want to fly, you have to give up what weighs you down.”</h3>
                            <p>-Roy T. Bennett-</p>
                        </Carousel.Item>
                        </Carousel>
                </div>

            </section>
            <footer className="text-center">
                <a href='#about'>
                    <p>Haut de page</p>
                </a>
                <h5>© 2020 TrangNGUYEN</h5>
            </footer>
        </div>
    )
}

export default Home;