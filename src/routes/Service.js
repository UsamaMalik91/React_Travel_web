import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Trip from '../Components/Trip';
import Footer from '../Components/Footer';
import Aboutimg from '../assets/dc.jpg'

function Service(){
    return(<>
             <Navbar/>
        <Hero
            cname='hero-mid' 
            heroimage={Aboutimg}
            title="Services"
            btn='hide'/>
            <Trip/>
            <Footer/>
    </>)
}
export default Service;