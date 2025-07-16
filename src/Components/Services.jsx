import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <section
      id="services"
      className="pt-20 py-10 px-6 md:px-12 bg-gradient-to-r from-blue-50 via-white to-blue-100 scroll-mt-20"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div
          className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-blue-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <GlobeAltIcon className="mx-auto h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-600">
            Build modern, responsive websites and web apps that engage your
            audience.
          </p>
        </div>

        <div
          className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-green-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <DevicePhoneMobileIcon className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">App Development</h3>
          <p className="text-gray-600">
            Create seamless mobile and desktop applications for all platforms.
          </p>
        </div>

        <div
          className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-purple-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <CodeBracketIcon className="mx-auto h-12 w-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Coding Projects</h3>
          <p className="text-gray-600">
            Custom programming solutions tailored to your business needs.
          </p>
        </div>

        <div
          className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-yellow-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <WrenchScrewdriverIcon className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Support & Maintenance</h3>
          <p className="text-gray-600">
            Ongoing updates, support, and technical assistance for your projects.
          </p>
        </div>
      </div>
    </section>
  );
}