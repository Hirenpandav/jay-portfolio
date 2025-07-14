import React from 'react'
import bgImage from '../assets/Home-page-bg.png'
import ggImage from '../assets/global-garner-app.png'
import ggImage2 from '../assets/global-garner-app2.png'
import logo from '../assets/logo.svg'
import aeroUp from '../assets/aero-up.svg'
import downAerrow from '../assets/down-aerrow.svg'
import { useState } from "react";
import { X, Menu } from 'lucide-react';
function Homepage() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="homepage">
      {/* Sticky Header */}
      <div className='flex justify-center w-full'>
        <header className="fixed top-4 z-50 w-full max-w-2xl px-4">
          {!isOpen ? (
            <nav className="flex justify-between items-center bg-white px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border border-gray-200">
              <div className="flex items-center">
                <img src={logo} alt="ova" className="h-8" />
              </div>
              <div className="md:flex hidden items-center gap-6">
                <a href="#work" className="px-5 py-1.5 bg-[#12B76A] text-white rounded-full font-medium">Work</a>
                <a href="#about" className="text-gray-600 hover:text-black font-medium">About</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
                <a href="#resume" className="text-gray-600 hover:text-gray-900 font-medium">Resume</a>
              </div>
              <button className="md:hidden" onClick={() => setIsOpen(true)}>
                <Menu className="text-green-600 w-6 h-6" />
              </button>
            </nav>
          ) : (
            <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full bg-white rounded-3xl shadow-xl z-50 p-6">
              <div className="flex justify-between items-start">
                <img src={logo} alt="ova" className="h-8 max-w-full" />
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <div className="mt-6 flex flex-col items-center gap-4 text-center">
                <a href="#work" className="px-6 py-2 bg-[#12B76A] text-white rounded-full font-medium w-full text-center">Work</a>
                <a href="#about" className="text-gray-800 font-medium">About</a>
                <a href="#contact" className="text-gray-800 font-medium">Contact</a>
                <a href="#resume" className="text-gray-800 font-medium">Resume</a>
              </div>
            </div>
          )}
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
        <div className="absolute bottom-[-34px] left-1/2 transform -translate-x-1/2 animate-bounce  bg-white rounded-full p-[5px] shadow-lg">
          <div className="bg-gray-300 rounded-full p-4">
            <img src={downAerrow} alt="" className='w-4 h-4' />
          </div>
        </div>
      </section>

      {/* Get In touch */}
      <section className='bg-white py-30'>
        <div className='max-w-5xl w-full container mx-auto flex flex-col'>
          <h1 className='text-3xl text-left font-semibold'>Hello, I’m Jay. I'm a designer passionate about creating beautiful, intuitive interfaces that help people. I focus on thoughtful details, seamless experiences, and meaningful impact.</h1>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Global Garner - Universal App
          </h2>

          {/* Project Image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg m-1">
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

      <section className='bg-[#F4F6F9]'>
        <div className='flex flex-col items-center text-center max-w-2xl mx-auto py-15'>
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
        <div className="w-full h-[1px] bg-gray-200"></div>
        <p className='text-gray-400 text-xs font-bold text-center py-3'>
          © 2025 All rights reserved
        </p>
      </section>
    </div>
  )
}

export default Homepage