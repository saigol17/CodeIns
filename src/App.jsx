import NavBar from './components/NavBar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import ContactUs from './components/ContactUs';


function App() {
  return (
       <div className="container">

        <NavBar />
        <Hero />  
        <Services />   
        <ContactUs />

      </div>
  );
}
export default App;