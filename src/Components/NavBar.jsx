import logo_sample from '../assets/coding.png';

function NavBar(){

    // Smooth scroll handler for all nav links
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        if (targetId === 'home') {
            // Scroll to the top of the page (where the navbar is)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const section = document.getElementById(targetId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
       <div className="bg-white shadow-md fixed w-full top-0 left-0 z-10">

        <header className="absolute inset-x-0 top-0 z-50 shadow-lg  bg-white">
            <nav className="flex items-center justify-between p-6 lg:px-8">
                <a href="#home" onClick={e => handleNavClick(e, 'home')}>
                  <img src={logo_sample} alt="Logo" className="h-8" />
                </a>

            <div className="flex items-center gap-6 py-2 px-7">
                <a href="#home" className="hover:text-blue-500" onClick={e => handleNavClick(e, 'home')}>Home</a>
                <a href="#about" className="hover:text-blue-500" onClick={e => handleNavClick(e, 'about')}>About Us</a>
                <a href="#services" className="hover:text-blue-500" onClick={e => handleNavClick(e, 'services')}>Services</a>
                <a href="#contact" className="hover:text-blue-500" onClick={e => handleNavClick(e, 'contact')}>Contact Us</a>
            </div>

            </nav>

        </header>
        
       </div>

    );
}

export default NavBar;