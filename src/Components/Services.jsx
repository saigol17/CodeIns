import ServiceCard from './ServiceCard';
import './Services.css';
import { FaCode, FaMobileAlt, FaProjectDiagram, FaHeadset } from 'react-icons/fa';

function Services(){
    return(
        <section id ="services" className="services-section">
            <h2 className="services-heading">Our Services</h2>
            <div className="services-list">
                <ServiceCard icon={<FaCode />} title="Web Development" description="Buidling responsive websites and web apps."/>
                <ServiceCard icon={<FaMobileAlt />} title="App development" description="Creating modern and desktop applications."/>
                <ServiceCard icon={<FaProjectDiagram />} title="Project Management" description="Managing projects from start to finish."/>
                <ServiceCard icon={<FaHeadset />} title="Customer Support" description="Providing 24/7 customer support."/>
            </div>
        </section>
    )
}

export default Services;
// This code defines a Services component that displays a list of services offered by a company.