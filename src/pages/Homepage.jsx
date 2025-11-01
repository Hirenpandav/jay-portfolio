import React, { useEffect, useRef } from 'react'
import bgImage from '../assets/Home-page-bg.png'
import ggImage from '../assets/global-garner-app.png'
import ggImage2 from '../assets/global-garner-app2.png'
import aeroUp from '../assets/aero-up.svg'
import downAerrow from '../assets/down-aerrow.svg'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Homepage() {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      words,
      { color: "#d3d3d3" }, // start light gray
      {
        color: "#000000", // fade to black
        stagger: 0.1, // one by one
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 10%", // animation starts
          end: "bottom 30%", // ends
          scrub: true, // sync with scroll

        },
      }
    );
  }, []);

  const projectsData = [
    {
      title: "Global Garner - Universal App",
      description: "Discover how to use Procreate's brushes and colors, along with all the essential gestures and tools you need to begin creating digital art on iPad.",
      image: ggImage,
      link: "#contact"
    },
    {
      title: "Global Garner - Mobile App",
      description: "A comprehensive mobile application designed for seamless user experience and enhanced functionality across all devices.",
      image: ggImage2,
      link: "#contact"
    }
  ];

  const introText =
    "Hello, I'm Jay. I'm a designer passionate about creating beautiful, intuitive interfaces that help people. I focus on thoughtful details, seamless experiences, and meaningful impact.";

  return (
    <div className="homepage">
      <Header />

      {/* Hero section */}
      <section className="relative">
        <div
          className="min-h-[100vh] flex flex-col justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
          <div className='flex h-full justify-center items-end pb-20'>
            <div className='flex flex-col items-center gap-2'>
              <h1 className='text-gray-400 text-xl font-semibold sm:text-3xl md:text-4xl'>Product Designer</h1>
              <h1 className='text-white text-4xl font-semibold tracking-wider sm:text-5xl md:text-6xl'>Jay Chovatiya</h1>
            </div>
          </div>
        </div>

        {/* Bouncing Scroll Down Button */}
        <div className="absolute bottom-[-34px] left-1/2 transform -translate-x-1/2 animate-bounce rounded-full p-[5px]">
          <img src={downAerrow} alt="" />
        </div>
      </section>

      {/* Get In touch */}
      <section className='bg-white py-25 px-6'>
        <div className='max-w-5xl w-full container mx-auto flex flex-col'>
          <h1
            ref={textRef}
            className='text-[70px] sm:text-[25px] text-left font-semibold flex flex-wrap leading-relaxed'
          >
            {introText.split(" ").map((word, i) => (
              <span key={i} className="transition-colors duration-500 mr-2">
                {word}
              </span>
            ))}
          </h1>

          <div className='flex gap-4 mt-6 w-full'>
            <Link
              to="/contact"
              className="border border-gray-300 rounded-full px-6 py-2 text-black flex items-center gap-2 hover:bg-black hover:text-white transition"
            >
              Get in touch
              <img src={aeroUp} alt="" className='w-4 h-4' />
            </Link>

            <div className="flex items-center text-green-600 font-medium">
              <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
              Open for work
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {projectsData.map((project, index) => (
        <section key={index} className='px-6 mx-auto pb-20'>
          <div className="max-w-5xl mx-auto text-left">
            <div className="w-full rounded-3xl overflow-hidden shadow-lg m-1">
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="w-full h-auto object-cover"
              />
            </div>

            <h2 className="text-2xl sm:text-[35px] font-[600] text-gray-900 mb-6 mt-6">
              {project.title}
            </h2>
            <h2 className="sm:text-[26px] text-[16px] text-gray-400 pb-4">
              {project.description}
            </h2>
          </div>
          <div className='max-w-5xl mx-auto flex justify-left'>
            <a
              href={project.link}
              className="border border-gray-300 rounded-full px-6 py-2 text-black flex items-center gap-2 hover:bg-black hover:text-white transition"
            >
              View More
              <img src={aeroUp} alt="" className='w-4 h-4' />
            </a>
          </div>
        </section>
      ))}
      <Footer />
    </div>
  )
}

export default Homepage
