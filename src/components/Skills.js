import React from 'react';

class Skills extends React.Component {
    render () {
        return (
            <section>
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
                                <div className="progress-bar" role="progressbar" aria-valuenow="90%" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                    <h5>JAVASCRIPT 90%</h5>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70%" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                    <h5>BOOTSTRAP 70%</h5>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-lg-4">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80%" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                    <h5>NODEJS/EXPRESS 80%</h5>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70%" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                    <h5>MONGODB 70%</h5>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="50%" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}>
                                    <h5>REACTJS 70%</h5>
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
                                    <h5>VISUAL STUDIO CODE 80%</h5>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="60%" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                                    <h5>LINUX/UBUNTU 60%</h5>
                                </div>
                            </div>
                        </div>
            
                    </div>

                </div>
            </section>
        )
    }
}
export default Skills;