import ContactUs from "../Form/ContactUs";
import './contact.styles.css';


export const Contact = () =>{

    return (
        <section id='contact' className="contact-container">
                <div>
                    <h3>Contact</h3>
                </div>
                <div>
                    <h2 className='hashTag'>#contactMe</h2>
                </div>
            <ContactUs />
        </section>
    )
}
