import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Homeimg from '../assets/12.jpg';
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';
import Footer from '../Components/Footer';
function Home(){
    return (
        <>
        <Navbar/>
         <Hero
            cname='hero' 
            heroimage={Homeimg}
            title="Your Journey Your Story"
            text="Choose Your Favoiurate Destisnation" 
            button_text='Travel Plan'
            url='/' btn='show'
         />
         <Destination/>
         <Trip/>
         <Footer/>
        
       
        </>
    )
}
export default Home;