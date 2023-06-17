import './Hero.css';

function Hero(props){
    return (<>
        <div className={props.cname}>
        
        <img alt='ig' src={props.heroimage}></img> 
        

        <div className='text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>

        <a href={props.url} className={props.btn}>
        {props.button_text}
        </a>
        </div>
        </div>
        </>
    )
}
export default Hero;
