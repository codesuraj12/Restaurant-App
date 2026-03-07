import React from 'react'

const Contact = () => {
  return (
     <section className="py-20 px-6 bg-gradient-to-br from-[#2c1a0e] to-[#1a1a2e] text-white min-h-screen flex items-center">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Left Side */}
    <div>
      <p className="text-sm tracking-[0.3em] text-amber-500 mb-4 uppercase">
        Contact Us
      </p>

      <h2 className="text-4xl font-light mb-6">
        Get In Touch
      </h2>

      <p className="text-gray-300 mb-8 leading-relaxed">
        We'd love to hear from you. Whether it's about reservations,
        our menu, or a special event — our team is here to help.
      </p>

      <div className="space-y-3 text-gray-300">
        <p><span className="text-amber-500">📍</span> 123 Food Street, India</p>
        <p><span className="text-amber-500">📞</span> +91 0544560110</p>
        <p><span className="text-amber-500">✉️</span> info@restaurant.com</p>
      </div>
    </div>

    {/* Right Side */}
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
      <form className="space-y-5">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-amber-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-amber-500"
        />

        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-amber-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition duration-300"
        >
          Send Message
        </button>

      </form>
    </div>

  </div>
</section>
  )
}

export default Contact