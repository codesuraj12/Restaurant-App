import React from 'react'


const About = () => {

  return (
    <div className="font-serif bg-[#faf8f4] text-[#2c1f14]  px-6 ">

      {/* Banner */}
      <div className="relative h-[520px] -mx-6 mb-16">
        <img
          src="/images/maggie.jpg"
          alt="Restaurant"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xs tracking-[0.3em] text-[#d4a85a]">
            Est. 1998 · Palermo
          </p>
          <h1 className="text-5xl font-light mt-4">
            Trattoria <em>Bellini</em>
          </h1>
          <p className="italic mt-3 text-sm text-[#e0cdb0]">
            Four walls, one lemon tree, twenty-six years of Sunday ragù.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className='text-center'>
        <p className="text-xs tracking-[0.2em] uppercase text-[#c17f3a] mb-3">
          Our Story
        </p>
        <h2 className="text-4xl font-light leading-tight mb-6">
          A mill, a marriage,<br />and a borrowed recipe.
        </h2>
        <p className="leading-7">
          Maria Conti carried her grandmother's ragù across three generations —
          folded inside a handwritten notebook.
        </p>
        <p className="leading-7 mt-4">
          Today their daughter Elena runs the kitchen. The menu is still five
          dishes. The ragù still cooks for seven hours.
        </p>
      </section>

      <div className="h-px bg-[#e6ded2] my-20" />

      {/* Chef */}
      <section className="flex flex-col md:flex-row justify-around gap-10">
        <img
          src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80"
          alt="Chef"
          className="w-52 h-60 object-cover"
        />
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#c17f3a] mb-3">
            Meet the Chef
          </p>
          <h2 className="text-3xl font-light mb-2">
            Elena Bellini
          </h2>
          <p className="italic text-[#c17f3a] mb-4">
            Executive Chef & Co-owner
          </p>
          <p className="leading-7">
            Raised under this kitchen's ceiling, trained in Paris, and returned
            with one conviction: simplicity is power.
          </p>
        </div>
      </section>

      <div className="h-px bg-[#e6ded2] my-20" />

   
    </div>
  )
}

export default About