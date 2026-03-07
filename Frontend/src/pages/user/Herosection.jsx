import React from 'react'
import Card from './Card'
import Carddata from '../../data.json'

import Heroimg from '../../assets/herosection.jpg'

const Herosection = () => {



    return (
        <div>
            <div className='min-h-screen overflow-hidden relative  flex flex-col justify-center items-center text-center px-6 '

            >
                <img
                    src={Heroimg}
                    alt="food"
                    className="absolute  inset-0 w-full h-full object-cover animate-[slowZoom_10s_ease-in-out_infinite]"
                />
                <div className="absolute inset-0 bg-black/30"></div>

                <div className='relative z-10 text-white'>
                    <p className="text-sm tracking-widest  uppercase mb-6">
                        ◈ Est. 1998 — New Delhi ◈
                    </p>


                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
                        Authentic Flavors <br />
                        of India
                    </h1>

                    <p className="text-xl text-white leading-tight">Freshly prepared meals delivered to your doorstep in minutes — fast, hot, and full of flavor.</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">

                        <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 hover:shadow-emerald-400 transition duration-200">
                            Reserve a Table
                        </button>

                        <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg  hover:text-emerald-100 
  transition duration-200">
                            Explore Menu
                        </button>
                    </div>

                   
                </div>

            </div>


<section className="relative py-20 bg-gradient-to-r from-amber-50 via-white to-amber-50">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

      {/* Stat Card */}
      <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <h3 className="text-5xl font-extrabold text-orange-600 mb-3">
          25+
        </h3>
        <p className="text-gray-600 tracking-widest text-sm">
          YEARS OF FLAVOR
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <h3 className="text-5xl font-extrabold text-orange-600 mb-3">
          120
        </h3>
        <p className="text-gray-600 tracking-widest text-sm">
          DISHES ON MENU
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <h3 className="text-5xl font-extrabold text-orange-600 mb-3">
          4.9
        </h3>
        <p className="text-gray-600 tracking-widest text-sm">
          AVERAGE RATING
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <h3 className="text-5xl font-extrabold text-orange-600 mb-3">
          3★
        </h3>
        <p className="text-gray-600 tracking-widest text-sm">
          AWARD WINS
        </p>
      </div>

    </div>

  </div>

</section>
            

            <section>

                <div className='min-h-screen bg-amber-50 flex flex-col items-center py-16 px-4'>
                    <p className='text-sm tracking-widest text-amber-600 font-semibold mb-3'>___ OUR OFFERINGS</p>

                    <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center'>Curated Specialties</h1>

                    {/* <div className='flex gap-4 flex-wrap justify-end'>
                        <button className="px-6 py-2 rounded-xl bg-amber-600 text-white font-medium shadow-md hover:bg-amber-700 transition duration-300">All Dishes</button>
                        <button className="px-6 py-2 rounded-xl bg-amber-600 text-white font-medium shadow-md hover:bg-amber-700 transition duration-300">Veg</button>
                        <button className="px-6 py-2 rounded-xl bg-amber-600 text-white font-medium shadow-md hover:bg-amber-700 transition duration-300">Non-veg</button>


                    </div> */}

                    <div className='flex gap-4 py-6 flex-wrap'>

                        {Carddata.map((cardobj) => (
                            <Card key={cardobj.id}
                                image={cardobj.image}
                                title={cardobj.title}
                                description={cardobj.description}
                                price={cardobj.price}
                                category={cardobj.category}
                            />
                        ))}

                    </div>
                </div>

            </section>



            <section>

                <div className="bg-amber-50 py-20 px-6">

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


                        <div>
                            <img
                                src={Heroimg}
                                alt="Our Story"
                                className="rounded-2xl shadow-lg"
                            />
                        </div>


                        <div>

                            <p className="text-sm tracking-widest text-amber-600 font-semibold mb-3">
                                ___ OUR STORY
                            </p>

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

                            <button className="px-6 py-3 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition duration-300">
                                Discover More
                            </button>

                        </div>

                    </div>

                </div>
            </section>


            <section>
                <div className="bg-white py-20 px-6">

                    <div className="max-w-6xl mx-auto text-center">

                        {/* Heading */}
                        <p className="text-sm tracking-widest text-amber-600 font-semibold mb-3">
                            ___ TESTIMONIALS
                        </p>

                        <h2 className="text-4xl font-bold text-gray-800 mb-12">
                            What Our Guests Say
                        </h2>

                        {/* Testimonial Cards */}
                        <div className="grid md:grid-cols-3 gap-8">

                            {/* Card 1 */}
                            <div className="bg-amber-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                                <p className="text-gray-600 mb-4">
                                    “Absolutely loved the food! The flavors were authentic and the
                                    ambience was so warm and welcoming.”
                                </p>
                                <h3 className="font-semibold text-gray-800">Aarav Sharma</h3>
                                <span className="text-sm text-amber-600">★★★★★</span>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-amber-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                                <p className="text-gray-600 mb-4">
                                    “Best paneer dish I’ve had in a long time. Service was quick and
                                    the staff was very friendly.”
                                </p>
                                <h3 className="font-semibold text-gray-800">Priya Mehta</h3>
                                <span className="text-sm text-amber-600">★★★★★</span>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-amber-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                                <p className="text-gray-600 mb-4">
                                    “A perfect place for family dinners. Great food, great vibe,
                                    and reasonable pricing.”
                                </p>
                                <h3 className="font-semibold text-gray-800">Rohan Verma</h3>
                                <span className="text-sm text-amber-600">★★★★★</span>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            <section>
                <div className="bg-amber-50 py-20 px-6">

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">

                        {/* Heading */}
                        <div className="text-center mb-10">
                            <p className="text-sm tracking-widest text-amber-600 font-semibold mb-3">
                                ___ RESERVATION
                            </p>

                            <h2 className="text-4xl font-bold text-gray-800">
                                Book Your Table
                            </h2>
                        </div>

                        {/* Form */}
                        <form className="grid md:grid-cols-2 gap-6">

                            <input
                                placeholder="Your Name"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />

                            <input
                                placeholder="Phone Number"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />

                            <input
                                placeholder="Date"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />

                            <input
                                placeholder="Time"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />

                            <input
                                placeholder="Number of Guests"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 md:col-span-2"
                            />

                            <button
                                className="md:col-span-2 bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition duration-300"
                            >
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