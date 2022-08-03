// Components
import {NavBar} from './components/NavBar/NavBar';
import { Main } from './components/Main/Main';
import { About } from './components/About/About';
import { Service } from './components/Service/Service';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AOS from 'aos';


// Styles;
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <>
        <NavBar />
        <Main />
        <About />
        <Service />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
