import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Aboutus from '../Components/Aboutus';
import Footer from '../Components/Footer';

import Aboutimg from '../assets/night.jpg';

function About(){
    return(<>
             <Navbar/>
         <Hero
            cname='hero-mid' 
            heroimage={Aboutimg}
            title="About"
            btn='hide'
         />
         <Aboutus/>
         <Footer/>
    </>)
}
export default About;