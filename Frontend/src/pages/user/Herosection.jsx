import React, { useEffect, useState } from 'react'
import Card from './Card'
import Carddata from '../../data.json'
import Skeleton from '../../Skeleton'
import Heroimg from '../../assets/herosection.jpg'
import { Link, useNavigate } from 'react-router-dom'

const statCard =
  "bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"

const sectionLabel = "text-sm tracking-widest text-amber-600 font-semibold mb-3"

const inputStyle =
  "border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"

const Herosection = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  const handleOrder = () => {
    const token = localStorage.getItem("token")

    if (!token) {
      alert("Please login first")
      navigate("/login")
      return
    }

    navigate("/foods")
  }

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {/* Hero */}
      <div className="min-h-screen overflow-hidden relative flex flex-col justify-center items-center text-center px-6">
        <img
          src={Heroimg}
          alt="food"
          className="absolute inset-0 w-full h-full object-cover animate-heroZoom"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-white">
          <p className="text-sm tracking-widest uppercase mb-6">
            ◈ Est. 1998 — New Delhi ◈
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Authentic Flavors <br />
            of India
          </h1>

          <p className="text-xl leading-tight">
            Freshly prepared meals delivered to your doorstep in minutes — fast, hot, and full of flavor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              className="px-6 py-3 bg-white text-orange-600 cursor-pointer font-semibold rounded-lg shadow-md
                         transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg active:scale-95"
            >
              Reserve a Table
            </button>

            <button
              className="px-6 py-3 border-2 border-white text-white cursor-pointer font-semibold rounded-lg
                         transition-colors duration-200 hover:bg-white/20 active:scale-95"
            >
              Explore Menu
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-amber-50 via-white to-amber-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className={statCard}>
            <h3 className="text-5xl font-extrabold text-orange-600 mb-3">25+</h3>
            <p className="text-gray-600 tracking-widest text-sm">YEARS OF FLAVOR</p>
          </div>

          <div className={statCard}>
            <h3 className="text-5xl font-extrabold text-orange-600 mb-3">120</h3>
            <p className="text-gray-600 tracking-widest text-sm">DISHES ON MENU</p>
          </div>

          <div className={statCard}>
            <h3 className="text-5xl font-extrabold text-orange-600 mb-3">4.9</h3>
            <p className="text-gray-600 tracking-widest text-sm">AVERAGE RATING</p>
          </div>

          <div className={statCard}>
            <h3 className="text-5xl font-extrabold text-orange-600 mb-3">3★</h3>
            <p className="text-gray-600 tracking-widest text-sm">AWARD WINS</p>
          </div>
        </div>
      </section>

      {/* Curated Specialties */}
      <section>
        <div className="min-h-screen bg-amber-50 flex flex-col items-center py-16 px-4">
          <p className={sectionLabel}>___ OUR OFFERINGS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
            Curated Specialties
          </h1>

          <div className="flex gap-4 py-6 flex-wrap justify-center">
            {loading
              ? Array(4).fill().map((_, i) => <Skeleton key={i} />)
              : Carddata.map((food) => (
                  <Card key={food.id} food={food} handleOrder={handleOrder} />
                ))}
          </div>

          <div className="mt-6">
            <Link to="/foods">
              <button
                className="px-6 py-3 bg-amber-600 text-white rounded-lg cursor-pointer
                           transition-transform duration-200 hover:bg-amber-700 hover:translate-y-0.5"
              >
                View More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section>
        <div className="bg-stone-50 py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <img
              src={Heroimg}
              alt="Our Story"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />

            <div>
              <p className={sectionLabel}>___ OUR STORY</p>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Where Flavor Meets Passion
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                What started as a small family kitchen has grown into a place where
                every dish tells a story. Our journey began with a simple idea —
                to serve food that feels like home while delivering unforgettable flavors.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                We carefully select fresh ingredients, blend authentic spices,
                and craft every meal with passion. Whether it's a comforting veg curry
                or a rich non-veg specialty, each plate is made with love and tradition.
              </p>

              <button className="px-6 py-3 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-colors duration-300">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="bg-amber-50 py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className={sectionLabel}>___ TESTIMONIALS</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Guests Say</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Aarav Sharma",
                  text: "Absolutely loved the food! The flavors were authentic and the ambience was so warm and welcoming.",
                },
                {
                  name: "Priya Mehta",
                  text: "Best paneer dish I've had in a long time. Service was quick and the staff was very friendly.",
                },
                {
                  name: "Rohan Verma",
                  text: "A perfect place for family dinners. Great food, great vibe, and reasonable pricing.",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-gray-600 mb-4">"{t.text}"</p>
                  <h3 className="font-semibold text-gray-800">{t.name}</h3>
                  <span className="text-sm text-amber-600">★★★★★</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section>
        <div className="bg-stone-50 py-20 px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
            <div className="text-center mb-10">
              <p className={sectionLabel}>___ RESERVATION</p>
              <h2 className="text-4xl font-bold text-gray-800">Book Your Table</h2>
            </div>

            <form className="grid md:grid-cols-2 gap-6">
              <input placeholder="Your Name" className={inputStyle} />
              <input placeholder="Phone Number" className={inputStyle} />
              <input placeholder="Date" className={inputStyle} />
              <input placeholder="Time" className={inputStyle} />
              <input placeholder="Number of Guests" className={`${inputStyle} md:col-span-2`} />

              <button className="md:col-span-2 bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300">
                Reserve Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Herosection