export default function ContactUs() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            We’d love to hear from you! Fill out the form and our team will be in touch.
          </p>
          <p className="text-gray-500 mb-2">📧 contact@yourcompany.com</p>
          <p className="text-gray-500">📞 +1 (123) 456-7890</p>
        </div>

        {/* Right Column - Contact Form */}
        <form
          action="https://formsubmit.co/mustafatariq831@gmail.com" // Replace with your email
          method="POST"
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-6 w-full"
        >
         

          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message..."
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}