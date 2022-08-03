import { Container } from 'react-bootstrap';
import './About.styles.css';


export const About = () => {

    return (
        <section id='about' className="about-container container-fluid">
            <Container>
                <div className='row rowContainer'>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className="col-md-12 col-lg-6">
                        <div className='aboutImg'>
                            <img
                                src='/Perfil.png'
                                alt="foto"
                                className='w-100'
                            />
                        </div>
                    </div>
                    <div 
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className="col-md-12 col-lg-6"
                    >
                        <div className='aboutTitle'>
                            <div>
                                <h3>Who I am</h3>
                            </div>
                            <div>
                                <h2 className='hashTag'>#aboutMe</h2>
                            </div>
                        </div>
                        <div className='aboutText'>
                            <p>
                                Frontend Developer, currently studying to become a Full Stack Developer and Software engineer.
                                Expert in capital markets with an extensive knowledge in customer service.
                                I consider important to continuously grow and develop my skills exploring outside my comfort zone.
                                I love teamwork and to contribute with my knowledge when I see someone needs it.
                            </p>
                            <p>
                                🚀 <span>What am I looking for in my career?</span> I want to continue advancing as
                                a software developer to be able to implement solutions to social problems
                                through the application of technologies such as <span className='gradient'>blockchain</span> by pouring all: ;
                                my effort and knowledge into organizations that are aligned with my goals
                                in creating creative solutions for society.
                            </p>
                            <p>
                                💥 <span>How do I seek it?</span> Challenging my knowledge permanently to expand it in
                                new fields that allow me to have the necessary tools to face projects of 
                                diverse.
                            </p>
                            <p>
                                👓 <span>And in the future?</span> I would like to be able to share the knowledge acquired
                                in teaching and creating content to encourage more people to join this passion
                                that is programming.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}