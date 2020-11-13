import React from 'react';

class Education extends React.Component {
    render () {
        return (
            <section>
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
                                    <h4>Titre RNCP niveau 6 (BAC +3/+4) - Développement Web Full-Stack</h4>
                                </div>
                                
                                <div className="red-divider"></div>
                                <p>HTML/CSS, JavaScript, Bootstrap</p>
                                <p>NodeJS, ExpressJS, MongoDB/Mongoose</p>
                                <p className="last-item">ReactJS</p>
                            </div>
                        
                    </div>
                        <div className="col-lg-4">
                            <div className="education-block">
                                <h5>2019-2020</h5>
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
                
                </div>
            </section>
        )
    }
}
export default Education;