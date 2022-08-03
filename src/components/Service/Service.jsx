import './Service.styles.css'

export const Service = () => {

    return(
        <section className="sectionService">
            <div
                className= 'container serviceContainer'
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <div className='skillsTitle'>
                    <div>
                        <h3>My tools</h3>
                    </div>
                    <div>
                        <h2 className='hashTag'>#skills</h2>
                    </div>
                </div>

                <div className='serviceInfoContainer'>
                    <h5> #Frontend</h5>
                    <div className='skillsContainer'>
                        <div>
                            <img src='/html.svg' alt="" />
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src='/css.svg' alt="" />
                            <p>CSS</p>
                        </div>
                        <div>
                            <img src='/js.svg' alt="" />
                            <p>Javascript</p>
                        </div>
                        <div>
                            <img src='/logo512.png' alt="" />
                            <p>React JS</p>
                        </div>
                    </div>
                    <h5> #Backend</h5>
                    <div className='skillsContainer'>
                        <div>
                            <img src='/python.png' alt="" />
                            <p>Python</p>
                        </div>
                        <div>
                            <img src='/mongodb.svg' alt="" />
                            <p>Mongo</p>
                        </div>
                        <div>
                            <img src='/mysql.svg' alt="" />
                            <p>MySQL</p>
                        </div>
                        <div>
                            <img src='/nodejs.svg' alt="" />
                            <p>Node JS</p>
                        </div>
                    </div>
                </div>
       

            </div>
        </section>
    ) 
}



/*<div className='loaderContainer'>
<div className="loader">
    <div className="loader-square">
        <img src='/logo512.png' alt="" />
    </div>
    <div className="loader-square">
        <img src='/sass.svg' alt="" />
    </div>
    <div className="loader-square">
        <img src='/js.svg' alt="" />
    </div>
    <div className="loader-square">
        <img src='/html.svg' alt="" />
    </div>
    <div className="loader-square">
        <img src='/nodejs.svg' alt="" />
    </div>
    <div className="loader-square">
        <img src='/css.svg' alt="" />
    </div>
    <div className="loader-square">
        <img src='/bootstrap.svg' alt="" />
    </div>
</div>*/