import './Navbar.css';
import logo_sample from '../assets/coding.png';

function NavBar(){

    return (
       <div className="navbar">
        <img src={logo_sample} alt="" className="logo"></img>

        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
        
       </div>

    );
}

export default NavBar;