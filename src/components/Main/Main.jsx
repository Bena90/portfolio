import './Main.styles.css';

export const Main = () => {
    return (
        <>
            <div id='home' className='main-container'> 
                    <div className=''>
                        <div className = 'd-flex'>
                            <h2>H</h2>
                            <h2>i</h2>
                            <h2>,</h2>
                            <span>⠀⠀</span>
                            <h2>I</h2>
                            <h2>’</h2>
                            <h2>m</h2>
                            <h2>👋​</h2>
                        </div>
                        <div className = 'd-flex'>
                            <div className = 'beStyle d-flex'>
                                <span>⠀⠀⠀⠀⠀⠀</span>
                                <h2>E</h2>
                                <h2>s</h2>
                                <h2>t</h2>
                                <h2>e</h2>
                                <h2>b</h2>
                                <h2>a</h2>
                                <h2>n</h2>
                                <span>⠀⠀</span>
                                <h2>B</h2>
                                <h2>e</h2>
                                <h2>n</h2>
                                <h2>a</h2>
                                <h2>b</h2>
                                <h2>a</h2>
                                <h2>r</h2>
                                <h2>r</h2>
                                <h2>e</h2>
                            </div>
                            <h2>😄​</h2>
                        </div>
                        <div className = 'd-flex subStyle'>
                            <span className=' d-flex'>
                                <h3>#</h3>
                                <h3>w</h3>
                                <h3>e</h3>
                                <h3>b</h3>
                                <span>⠀</span>
                                <h3>d</h3>
                                <h3>e</h3>
                                <h3>v</h3>
                                <h3>e</h3>
                                <h3>l</h3>
                                <h3>o</h3>
                                <h3>p</h3>
                                <h3>e</h3>
                                <h3>r</h3>
                            </span>
                        </div>
                        <h4> Full Stack Developer </h4>
                        <div>
                            <button className='resumeButton'>
                                <a href='./Resume.pdf' target="_blank" rel="noopener noreferrer" download="Resume.pdf"> 
                                Download Resume 
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
        </>
    )
}

