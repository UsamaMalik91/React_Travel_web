import mount1 from '../assets/1.jpg';
import mount2 from '../assets/mn.jpg';
import mount3 from '../assets/2.jpg';
import mount4 from '../assets/au.jpg';
import './Destination.css'
import Destinationdata from './Destinationdata';
const Destination=()=> {
    return(
    <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give the oppertunity to explore the world beauty</p>
    
    <Destinationdata className='first-des'
        heading='Berlin Germany'
        text="With its rich history, diverse culture,
        and modern atmosphere, Berlin has something 
        for everyone. Explore iconic landmarks like the
        Brandenburg Gate and the Berlin Wall,
         delve into the city's fascinating museums 
         and art galleries or wander through its trendy
          neighborhoods with bustling markets and hip 
          cafes"
          img1={mount1}
          img2={mount2}
    />

<Destinationdata className='first-des-reverse'
        heading='Salzburg Austia'
        text="With its rich history, diverse culture,
        and modern atmosphere, Berlin has something 
        for everyone. Explore iconic landmarks like the
        Brandenburg Gate and the Berlin Wall,
         delve into the city's fascinating museums 
         and art galleries or wander through its trendy
          neighborhoods with bustling markets and hip 
          cafes"
          img1={mount3}
          img2={mount4}
    />
    </div>
    
    )
}
export default Destination;