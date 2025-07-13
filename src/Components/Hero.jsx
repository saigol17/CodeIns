
import heroImg from '../assets/hero-image.png';

function Hero(){
    return(
    <section id="about" className="w-full bg-gray-50 py-80 px-6 md:px-12">
      {/* Centered Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
        Welcome to Our Platform
      </h1>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Text Column */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Empowering Your Digital Presence
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We help you build modern, responsive, and scalable web applications.
            Our team is dedicated to delivering high-quality code and great user experiences.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Right Image Column */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Hero Visual"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
    )
}

export default Hero;
// This code defines a Hero component that displays a hero section with a title, description, and an image.