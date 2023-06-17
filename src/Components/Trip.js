import './Trip.css';
import TripData from './TripData';
import Trip1 from '../assets/pak.jpg';
import Trip2 from '../assets/id.jpg';
import Trip3 from '../assets/pk.jpg';
function Trip(){
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can Discovery unique 
            destination using Google Maps</p>

            <div className='tripcard'>
                <TripData image={Trip2}
                    heading="Trip of Indonasia" 
                    text="Indonesians are known for their warmth hospitality and strong sense of community. The concept 
                    of gotong royong or mutual cooperation, is deeply ingrained in the culture and plays a vital role in 
                    Indonesian society. Festivals, such as Eid al-Fitr and Nyepi, are celebrated with great enthusiasm, 
                    reflecting the religious and cultural diversity of the country."/>
            <TripData image={Trip3}
                    heading="Trip of Pakistan" 
                    text="Pakistan, a mesmerizing country in South Asia, holds a wealth of attractions for tourists. 
                    Its diverse landscape encompasses towering mountains, lush valleys, pristine lakes, and expansive deserts. 
                    The majestic peaks of the Karakoram and Himalayan ranges, including the legendary K2, offer thrilling adventures 
                    for mountaineers and trekkers. The ancient Indus Valley Civilization sites, such as Mohenjo-Daro 
                    ."/>

<TripData image={Trip1}
                    heading="Trip of Turkey" 
                    text="Turkey is a captivating destination for tourism, offering a rich tapestry of historical, cultural,
                    and natural wonders. Its strategic location bridging Europe and Asia allows visitors to explore a blend of 
                    diverse influences. The country is famed for its iconic sites, including the awe-inspiring Hagia Sophia, 
                    the ancient city of Ephesus, and the otherworldly landscapes of Cappadocia."/>
            
            </div>
        </div>
    

        
    )
}
export default Trip;