import React from 'react';

class About extends React.Component {
    render () {
        return (
            <section id='about' className="container-fluid">
                <div className="col-xs-12 col-lg-4 profile-picture">
                    <img src='images/avatar.jpeg' className="rounded-circle" />
                </div>
                <div className="heading">
                    <h1>Thi-Trang NGUYEN</h1>
                    <h3>Développeuse Web Full-stack Junior</h3>
                    <div>
                        <a href="https://github.com/trangnguyen307" target="blank" className="github"><i className="fab fa-github icon"></i></a>
                        <a href="https://www.linkedin.com/in/trangnguyen307/" target="blank" className="linkedin"><i className="fab fa-linkedin-in icon "></i></a>
                    </div>
                    
                </div>
                
            </section>
        )
    }
}
export default About;