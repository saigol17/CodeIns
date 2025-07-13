import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';


function App() {
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