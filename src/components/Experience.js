import React from 'react';

class Education extends React.Component {
    render () {
        return (
            <section>
                <div className="white-divider"></div>
                <div className="heading">
                    <h2>Expériences Professitionelles</h2>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-badge"><img src="images/work-24px.svg" alt=""/></div>
                        <div className="timeline-panel-container">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3>Oh! Ba Lan, Varsovie, Pologne</h3>
                                    <h4>Développeuse Full-Stack - Freelance</h4>
                                    <p className="text-muted"><small><img src="images/schedule.svg" alt=""/></small> 12/2020 - Aujourd'hui</p>
                                </div>
                                <div className="timeline-body">
                                    <p>Développement d’un site web full-stack de transfert d’argent entre la Pologne et le Vietnam (front-office et back-office)</p>
                                    <p>Front-office: </p>
                                    <ul className="list-tasks">
                                        <li>Implémentation de l'interface d'utilisateur</li>
                                        <li>Gestion de l'API de taux d'échange</li>
                                        <li>Envoi et sauvegarde des transactions dans la base de données</li>
                                    </ul>
                                    <p>Back-office: </p>
                                    <ul className="list-tasks">
                                        <li>Implémentation de l'interface d'administrateur</li>
                                        <li>Gestion et traitement des transactions</li>
                                        <li>Gestion RH</li>
                                        <li>Solution de sécurité</li>
                                    </ul>
                                    <p>Stack : ReactJS, NodeJS/ExpressJS, MongoDB, Bootstrap, Git/Github, Heroku (prototypage), Microsoft Azure (production), VS Code</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-badge"><img src="images/work-24px.svg" alt=""/></div>
                        <div className="timeline-panel-container-inverted">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3>Boulangerie Au Péché Mignon </h3>
                                    <h4>Vendeuse - CDI</h4>
                                    <p className="text-muted"><small><img src="images/schedule.svg" alt=""/></small> 2/2019 - 2/2020</p>
                                </div>
                                <div className="timeline-body">
                                    <p>Accueil et prise en charge des clients, conseil client</p>
                                    <p>Gestion de la caisse</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-badge"><img src="images/work-24px.svg" alt="" /></div>
                        <div className="timeline-panel-container">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3>Club Med </h3>
                                    <h4>Assistante Comptable - Stage</h4>
                                    <p className="text-muted"><small><img src="images/schedule.svg" alt="" /></small> 6/2018 - 9/2018</p>
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
                        <div className="timeline-badge"><img src="images/work-24px.svg" alt=""/></div>
                        <div className="timeline-panel-container-inverted">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3>Crédit Agricole Consumer Finance </h3>
                                    <h4>Administrateur - CDD</h4>
                                    <p className="text-muted"><small><img src="images/schedule.svg" alt=""/></small> 7/2017 - 9/2017</p>
                                </div>
                                <div className="timeline-body">
                                    <p>Traitement et suivi des dossiers de client grâce au système informatique du département</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-badge"><img src="images/work-24px.svg" alt=""/></div>
                        <div className="timeline-panel-container">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3>Société Phuong Anh (Vietnam) </h3>
                                    <h4>Chargée d'affaire - CDI</h4>
                                    <p className="text-muted"><small><img src="images/schedule.svg" alt=""/></small> 7/2015 - 7/2016</p>
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
        )
    }
}
export default Education;