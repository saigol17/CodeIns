export default function Services() {
  return (
    <section
      id="services"
      className="pt-20 py-10 px-6 md:px-12 bg-gradient-to-r from-blue-50 via-white to-blue-100 scroll-mt-20"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-600">Build modern websites & web apps.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2">App Development</h3>
          <p className="text-gray-600">Create mobile or desktop apps.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2">Coding Projects</h3>
          <p className="text-gray-600">Custom programming solutions.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2">Support & Maintenance</h3>
          <p className="text-gray-600">Ongoing updates & assistance.</p>
        </div>
      </div>
    </section>
  );
}