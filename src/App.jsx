import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';


function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
       <div className="min-h-screen bg-white text-gray-800">

        <NavBar />
        <Hero />
        <Services />
        <ContactUs />
        <Footer />


      </div>
  );
}
export default App;