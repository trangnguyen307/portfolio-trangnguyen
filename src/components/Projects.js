import React from 'react';

class Projects extends React.Component {
    render () {
        return (
            <section>
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
        )
    }
}
export default Projects;