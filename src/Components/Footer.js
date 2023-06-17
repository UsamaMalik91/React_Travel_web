import './footer.css'


const Footer=()=>{
    return(
        <div className='footer'>
            <div className='top'>
            <div>
                <h1>Travalers</h1>
                <p>Choose your Favourate destinations</p>
            </div>
            <div>
                <a href='/'><i className="fa-brands fa-facebook-square"></i></a>
                <a href='/'><i className="fa-brands fa-instagram-square"></i></a>
                <a href='/'><i className="fa-brands fa-behance-square"></i></a>
                <a href='/'><i className="fa-brands fa-twitter-square"></i></a>
            </div>
            </div>
            <div className='bottom'>
                <div>
                    <h4>Projects</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a>
                </div>
                <div>
                    <h4>Presence</h4>
                    <a href='/'>Github</a>
                    <a href='/'>StackOverFlow</a>
                    <a href='/'>Chegg</a>
                    <a href='/'>VS Code</a>
                </div>
                <div>
                    <h4>Support</h4>
                    <a href='/'>Help</a>
                    <a href='/'>ContactUs</a>
                    <a href='/'>Complains</a>
                    <a href='/'>Reports</a>
                    
                </div>
                <div>
                    <h4>Others</h4>
                    <a href='/'>Licenses</a>
                    <a href='/'>Legal</a>
                    <a href='/'>Alerts</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;
