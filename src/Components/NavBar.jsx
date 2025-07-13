
import logo_sample from '../assets/coding.png';

function NavBar(){

    return (
       <div className="bg-white shadow-md fixed w-full top-0 left-0 z-10">

        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8">
                <img src={logo_sample} alt="" className="h-8"></img>

            <div className="flex items-center gap-6 py-2 px-7">
                <a href="#home" className="hover:text-blue-500">Home</a>
                <a href="#about" className="hover:text-blue-500">About Us</a>
                <a href="#services" className="hover:text-blue-500">Services</a>
                <a href="#contact" className="hover:text-blue-500">Contact Us</a>
            </div>

            </nav>

        </header>
        
       </div>

    );
}

export default NavBar;