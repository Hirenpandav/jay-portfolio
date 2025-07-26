import React from 'react'
import bgImage from '../assets/Home-page-bg.png'
import ggImage from '../assets/global-garner-app.png'
import ggImage2 from '../assets/global-garner-app2.png'

import aeroUp from '../assets/aero-up.svg'
import downAerrow from '../assets/down-aerrow.svg'
import Header from '../component/Header'
import Footer from '../component/Footer'



function Homepage() {


  return (
    <div className="homepage">
      <Header></Header>
      {/* Hero section */}
      <section className="relative">
        <div
          className="min-h-[100vh] flex flex-col justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`
          }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
          <div className='flex h-full justify-center items-end pb-20'>
            <div className='flex flex-col items-center gap-2'>
              <h1 className='text-gray-400 text-xl font-semibold sm:text-3xl md:text-4xl'>Product Designer</h1>
              <h1 className='text-white text-4xl font-semibold tracking-wider sm:text-5xl md:text-6xl'>Jay chovatiya</h1>
            </div>
          </div>
        </div>
        {/* Bouncing Scroll Down Button */}
        <div className="absolute bottom-[-34px] left-1/2 transform -translate-x-1/2 animate-bounce  bg-white rounded-full p-[5px]">
          <div className="bg-gray-300 rounded-full p-4">
            <img src={downAerrow} alt="" className='w-4 h-4' />
          </div>
        </div>
      </section>

      {/* Get In touch */}
      <section className='bg-white py-25 px-6'>
        <div className='max-w-5xl w-full container mx-auto flex flex-col'>
          <h1 className='text-2xl sm:text-3xl text-left font-semibold'>Hello, I’m Jay. I'm a designer passionate about creating beautiful, intuitive interfaces that help people. I focus on thoughtful details, seamless experiences, and meaningful impact.</h1>
          <div className='flex gap-4 mt-6 w-full'>
            <a
              href="#contact"
              className="border border-gray-300 rounded-full px-6 py-2 text-black flex items-center gap-2 hover:bg-black hover:text-white transition"
            >
              Get in touch
              <img src={aeroUp} alt="" className='w-4 h-4' />
            </a>

            <div className="flex items-center text-green-600 font-medium">
              <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
              Open for work
            </div>
          </div>
        </div>

      </section>

      <section className='bg-[#F4F6F9] py-20 px-6 mx-w-4xl mx-auto'>
        <div className="max-w-5xl mx-auto text-left">

          {/* Project Type */}
          <p className="text-green-600 font-semibold text-lg mb-2">Mobile</p>

          {/* Project Title */}
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-8">
            Global Garner - Universal App
          </h2>

          {/* Project Image */}
          <div className="w-full rounded-3xl overflow-hidden shadow-lg m-1">
            <img
              src={ggImage} // Replace with your actual image path
              alt="Global Garner App Preview"
              className="w-full h-auto object-cover"
            />
          </div>

          <h2 className="text-xl font-semibold text-gray-900 py-4">
            Discover how to use Procreate’s brushes and colors, along with all the essential gestures and tools you need to begin creating digital art on iPad.
          </h2>
          <h2 className="text-md text-gray-400 py-2">
            Discover how to use Procreate’s brushes and colors, along with all the essential gestures and tools you need to begin creating digital art on iPad.
          </h2>

        </div>
        <div className='max-w-5xl mx-auto  flex justify-left'>

          <a
            href="#contact"
            className="border border-gray-300 rounded-full px-6 py-2 text-black flex items-center gap-2 hover:bg-black hover:text-white transition"
          >
            View More
            <img src={aeroUp} alt="" className='w-4 h-4' />
          </a>
        </div>

      </section>

      <section className='bg-white-100 py-20 px-6 mx-w-4xl mx-auto'>
        <div className="max-w-5xl mx-auto text-left">

          {/* Project Type */}
          <p className="text-green-600 font-semibold text-lg mb-2">Mobile</p>

          {/* Project Title */}
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-8">
            Global Garner - Universal App
          </h2>

          {/* Project Image */}
          <div className="w-full rounded-3xl overflow-hidden shadow-lg">
            <img
              src={ggImage2} // Replace with your actual image path
              alt="Global Garner App Preview"
              className="w-full h-auto object-cover"
            />
          </div>

          <h2 className="text-xl font-semibold text-gray-900 py-4">
            Discover how to use Procreate’s brushes and colors, along with all the essential gestures and tools you need to begin creating digital art on iPad.
          </h2>
          <h2 className="text-md text-gray-400 py-2">
            Discover how to use Procreate’s brushes and colors, along with all the essential gestures and tools you need to begin creating digital art on iPad.
          </h2>

        </div>
        <div className='max-w-5xl mx-auto  flex justify-left'>

          <a
            href="#contact"
            className="border border-gray-300 rounded-full px-6 py-2 text-black flex items-center gap-2 hover:bg-black hover:text-white transition"
          >
            View More
            <img src={aeroUp} alt="" className='w-4 h-4' />
          </a>
        </div>

      </section>
      <Footer></Footer>
    </div>
  )
}

export default Homepage