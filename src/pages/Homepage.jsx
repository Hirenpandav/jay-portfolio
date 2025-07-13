import React from 'react'
import bgImage from '../assets/Home-page-bg.png'
import ggImage from '../assets/global-garner-app.png'
import ggImage2 from '../assets/global-garner-app2.png'
import logo from '../assets/logo.svg'
import aeroUp from '../assets/aero-up.svg'

function Homepage() {
  return (
    <div className="homepage">
      {/* Sticky Header */}
      <div className='flex justify-center w-full'>
        <header className="fixed top-4 z-50 w-full max-w-2xl px-4">
          <nav className="flex justify-between items-center bg-white px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border border-gray-200">
            <div className="flex items-center gap-2">
              <img src={logo} alt="ova" className="h-8" />
            </div>
            <div className="flex items-center gap-6">
              <a href="#work" className="px-5 py-1.5 bg-[#12B76A] text-white rounded-full font-medium">Work</a>
              <a href="#about" className="text-gray-600 hover:text-black font-medium">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
              <a href="#resume" className="text-gray-600 hover:text-gray-900 font-medium">Resume</a>
            </div>
          </nav>
        </header>
      </div>

      {/* Hero section */}
        <section className="relative">
          <div
            className="min-h-[90vh] flex flex-col justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImage})`
            }}
          >
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
            <div className='flex h-full justify-center items-end pb-20'>
              <div className='flex flex-col items-center gap-2'>
                <h1 className='text-gray-400 text-3xl font-bold tracking-wider'>Product Designer</h1>
                <h1 className='text-white text-6xl font-bold'>Hiren pandav</h1>
              </div>
            </div>
          </div>
          {/* Bouncing Scroll Down Button */}
          <div className="absolute bottom-[-1] left-1/2 transform -translate-x-1/2 animate-bounce bg-white rounded-full p-1 shadow-lg">
            <div className="bg-gray-300 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </section>

      {/* Get In touch */}
        <section className='bg-white py-20 px-6 mx-w-4xl container mx-auto border-b-reg-950 flex justify-center'>
          <div className='flex justify-center mb-8 text-center max-w-3xl flex-col items-center'>
            <h1 className='text-3xl text-left'>Hello, I’m Jay. I'm a designer passionate about creating beautiful, intuitive interfaces that help people. I focus on thoughtful details, seamless experiences, and meaningful impact.</h1>
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

        <section className='bg-[#F4F6F9] py-20 px-6 mx-w-4xl container mx-auto'>
          <div className="max-w-5xl mx-auto text-left">

            {/* Project Type */}
            <p className="text-green-600 font-semibold text-lg mb-2">Mobile</p>

            {/* Project Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Global Garner - Universal App
            </h2>

            {/* Project Image */}
            <div className="w-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src={ggImage} // Replace with your actual image path
                alt="Global Garner App Preview"
                className="w-full h-auto object-cover"
              />
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-1 p-2">
              Discover how to use Procreate’s brushes and colors, along with all the essential gestures and tools you need to begin creating digital art on iPad.
            </h2>
            <h2 className="text-md text-gray-400 mb-8">
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

        <section className='bg-white-100 py-20 px-6 mx-w-4xl container mx-auto'>
          <div className="max-w-5xl mx-auto text-left">

            {/* Project Type */}
            <p className="text-green-600 font-semibold text-lg mb-2">Mobile</p>

            {/* Project Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Global Garner - Universal App
            </h2>

            {/* Project Image */}
            <div className="w-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src={ggImage2} // Replace with your actual image path
                alt="Global Garner App Preview"
                className="w-full h-auto object-cover"
              />
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-1 p-2">
              Discover how to use Procreate’s brushes and colors, along with all the essential gestures and tools you need to begin creating digital art on iPad.
            </h2>
            <h2 className="text-md text-gray-400 mb-8">
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

        <section className='bg-[#F4F6F9] py-20 px-6 mx-w-4xl container mx-auto'>
          <div className='flex flex-col items-center text-center max-w-2xl mx-auto'>
            <h2 className='text-md font-semibold text-gray-600 mb-4'>
              Let's Build Something Together
            </h2>

            <p className='text-2xl font-bold text-gray-900 mb-8'>
              pandavhiren4@gmail.com
            </p>

            <div className='flex gap-4'>
              <a
                href="#contact"
                className="border border-gray-300 rounded-full px-6 py-2 text-black flex items-center gap-2 hover:bg-black hover:text-white transition"
              >
                LinkedIn
                <img src={aeroUp} alt="" className='w-4 h-4' />
              </a>
              <a
                href="#contact"
                className="border border-gray-300 rounded-full px-6 py-2 text-black flex items-center gap-2 hover:bg-black hover:text-white transition"
              >
                Twitter
                <img src={aeroUp} alt="" className='w-4 h-4' />
              </a>
              <a
                href="#contact"
                className="border border-gray-300 rounded-full px-6 py-2 text-black flex items-center gap-2 hover:bg-black hover:text-white transition"
              >
                Email
                <img src={aeroUp} alt="" className='w-4 h-4' />
              </a>
            </div>
          </div>
            <div className="w-full h-[1px] bg-gray-200 mt-8 mb-1"></div>
            <p className='text-gray-400 mt-1 text-xs font-bold text-center p-1'>
              © 2025 All rights reserved
            </p>
        </section>
      </div>
  )
}

export default Homepage