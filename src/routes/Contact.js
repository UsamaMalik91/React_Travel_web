import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';
import Aboutimg from '../assets/2.jpg'
function Contact(){
    return(<>
        <Navbar/>
        <Hero
            cname='hero-mid' 
            heroimage={Aboutimg}
            title="Contact"
            btn='hide'
        />
        <ContactForm/>
        <Footer/>
    </>)
}
export default Contact;