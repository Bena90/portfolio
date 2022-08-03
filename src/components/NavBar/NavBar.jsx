import './NavBar.styles.css'

export const NavBar = () => {

    return (
        <header className="navbar">
                <nav className="contenedor">
                    <h1>
                        <span className="logoOne">{'</ '}</span>               
                        <span className="logoBeCode">BeCode</span>                         
                        <span className="logoOne">{' >'}</span>               
                    </h1>
                    <div className="navigation-menu">
                        <a href='#home' className="navButton" >Home</a>
                        <a href='#about' className="navButton" >About Me</a>
                        <a href='#project' className="navButton" >Projects</a>
                        <a href='#contact' className="navButton" >Contact</a>
                    </div>
                    <h5 className='logoName contenedor-hidden'>Esteban M Benabarre</h5>
                </nav>
        </header>
    )
 }