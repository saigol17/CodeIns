import './Hero.css';
import heroImg from '../assets/hero.png';

function Hero(){
    return(
        <section id="about" className="hero">
            <div className="hero-text">
                <h1>Welcome to our website</h1>
                <p>We provide top-notch services to help your business grow. let's build something great together.</p>
            </div>

            <div className="hero-image">
                <img src={heroImg} alt="Hero" />
            </div>
        </section>
    )
}

export default Hero;
// This code defines a Hero component that displays a hero section with a title, description, and an image.