import './ContactUs.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>

      <div className="contact-list">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <div>
            <h4>Email</h4>
            <p>example@email.com</p>
          </div>
        </div>

        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <div>
            <h4>Phone</h4>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <div>
            <h4>LinkedIn</h4>
            <p>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/yourprofile
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}