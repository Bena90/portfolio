import SvgCss from '../../utils/SvgCss';
import SvgHtml from '../../utils/SvgHtml';
import SvgJavascript from '../../utils/SvgJavascript';
import SvgFirebase from '../../utils/SvgFirebase';
import SvgReact from '../../utils/SvgReact';
import SvgSass from '../../utils/SvgSass';
import SvgBootstrap from '../../utils/SvgBootstrap';
import SvgTailwind from '../../utils/SvgTailwind';
import SvgNext from '../../utils/SvgNext';
import SvgMySQL from '../../utils/SvgMySQL';
import SvgMongo from '../../utils/SvgMongo';
import SvgExpress from '../../utils/SvgExpress';
import SvgNode from '../../utils/SvgNode';
import './Porfolio.styles.css';

export const Portfolio  = () => {

    return (
        <section id='project' className='portSection container'>
            <div className='portTitle'>
                <div>
                    <h3>Porftolio</h3>
                </div>
                <div>
                    <h2 className='hashTag'>#myworks</h2>
                </div>
                <p>Here are some of <span className='gradient'>my projects</span> I have worked on lately. All of them were made during <span>my studies</span> these last years. </p>
                <p>You can see the rest of my projects here in my <a className='gradient link' target="_blank" rel="noopener noreferrer" href="https://github.com/Bena90/">Github repository</a>. </p>
                <div className="projectsContainer">
                    <div className='projectsCard'>
                        <div className='imagesContainer'>
                            <img className='projectsImg' width={400} src='/plantusqui.png' alt='plantusqui' />
                        </div>
                        <div className='infoContainer'>
                            <h3>Plantusqui</h3>
                            <p> 
                                I want to present you my first E-Commerce made as a final project of my React course at CoderHouse ⚡
                            </p>
                            <p>
                            💻​​ Languages and tools used: 
                            </p>
                            <p>
                                | <SvgJavascript/> Javascript | <SvgReact/> React JS | <SvgBootstrap/> Bootstrap | <SvgFirebase/> Firebase | <SvgSass/> Sass |
                            </p>
                            <div className='portfolioButtonContainer'>
                                <button className='button-64'>
                                    <span className="text">
                                        <a target="_blank" rel="noopener noreferrer" href="https://plantusqui.vercel.app/">View Website</a>
                                    </span>
                                </button>
                                <button className='button-64'>
                                    <span className="text">
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Bena90/Plantusqui">View Github</a>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='projectsCard'>
                        <div className='imagesContainer'>
                            <img className='projectsImg' src='/roccoto.png' alt='roccoto' />
                        </div>
                        <div className='infoContainer'>
                            <h3>Roccoto Gourmet</h3>
                            <p>
                                This project is a landing page made for a small and beautiful business that sells homemade food that encourages healthy eating. 🥦​
                            </p>
                            <p>
                            💻​​ Languages and tools used: 
                            </p>
                            <p>
                            | <SvgHtml /> HTML | <SvgCss /> CSS | <SvgJavascript/> Javascript | <SvgSass/> SASS | <SvgBootstrap/> Bootstrap |
                            </p>
                            <div className='portfolioButtonContainer'>
                                <button className='button-64'>
                                    <span className="text">
                                        <a target="_blank" rel="noopener noreferrer" href="https://roccotogourmet.000webhostapp.com/">View Website</a>
                                    </span>
                                </button>
                                <button className='button-64'>
                                    <span className="text">
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Bena90/roccoto_gourmet/">View Github</a>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='projectsCard'>
                        <div className='imagesContainer'>
                            <img className='projectsImg' src='/kiosko.png' alt='kioskoimage' />
                        </div>
                        <div className='infoContainer'>
                            <h3>App Kiosko</h3>
                            <p>
                                This project is an application made in a course in Udemy with NextJS, Prisma and TailwindCSS 🥦​
                            </p>
                            <p>
                            💻​​ Languages and tools used: 
                            </p>
                            <p>
                            | <SvgNext /> Next | <SvgMySQL /> MySQL | <SvgJavascript/> Javascript | <SvgTailwind/> TailwindCSS |
                            </p>
                            <div className='portfolioButtonContainer'>
                                <button className='button-64'>
                                    <span className="text">
                                        <a target="_blank" rel="noopener noreferrer" href="https://roccotogourmet.000webhostapp.com/">View Website</a>
                                    </span>
                                </button>
                                <button className='button-64'>
                                    <span className="text">
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Bena90/roccoto_gourmet/">View Github</a>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='projectsCard'>
                        <div className='imagesContainer'>
                            <img className='projectsImg' src='/uptask.png' alt='uptaskimage' />
                        </div>
                        <div className='infoContainer'>
                            <h3>UpTask App</h3>
                            <p>
                                This is a MERN Full Stack Project to administer and manage projects and tasks.
                            </p>
                            <p>
                            💻​​ Languages and tools used: 
                            </p>
                            <p>
                            | <SvgReact /> React | <SvgExpress /> Express | <SvgMongo/> Mongo |  <SvgNode/> Node | <SvgTailwind/> TailwindCSS |
                            </p>
                            <div className='portfolioButtonContainer'>
                                <button className='button-64'>
                                    <span className="text">
                                        <a target="_blank" rel="noopener noreferrer" href="https://uptaskproject.netlify.app/">View Website</a>
                                    </span>
                                </button>
                                <button className='button-64'>
                                    <span className="text">
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Bena90/MERN_Uptask_Frontend">View Github Front</a>
                                    </span>
                                </button>
                                <button className='button-64'>
                                    <span className="text">
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Bena90/MERN_Uptask_Backend">View Github Back</a>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='projectsCard'>
                        <div className='imagesContainer'>
                            <img className='projectsImg' width={400} src='/crypto.png' alt='roccoto' />
                        </div>
                        <div className='infoContainer'>
                            <h3>Crypto Price</h3>
                            <p>
                                This is a small application I made, which allows you to quote the top 10 cryptocurrencies on the market.⚡ To make it, I used Vite, styled components and custom hooks. ⚡
                            </p>
                            <p>
                                💻​​ Languages and tools used: 
                            </p>
                            <p>
                                | <SvgReact/> React JS |
                            </p>

                            <div className='portfolioButtonContainer'>
                                <button className='button-64'>
                                    <span className="text">
                                        <a target="_blank" rel="noopener noreferrer" href="https://cryptoprice-psi.vercel.app/">View Website</a>
                                    </span>
                                </button>
                                <button className='button-64'>
                                    <span className="text">
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Bena90/cryptoprice">View Github</a>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='projectsCard'>
                        <div className='imagesContainer'>
                            <img className='projectsImg' width={400} src='/citas.png' alt='roccoto' />
                        </div>
                        <div className='infoContainer'>
                            <h3>Citas Appets</h3>
                            <p> 
                                I want to present you a simple application for veterinary patients made with React, Formik and Tailwind.
                            </p>
                            <p>
                            💻​​ Languages and tools used: 
                            </p>
                            <p>
                                | <SvgReact/> React JS | <SvgTailwind /> Tailwind |
                            </p>
                            <div className='portfolioButtonContainer'>
                                <button className='button-64'>
                                    <span className="text">
                                        <a target="_blank" rel="noopener noreferrer" href="https://citasappets.netlify.app/">View Website</a>
                                    </span>
                                </button>
                                <button className='button-64'>
                                    <span className="text">
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Bena90/citasappets">View Github</a>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}