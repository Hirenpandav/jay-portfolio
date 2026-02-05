import React from 'react'
import aeroUp from '../assets/aero-up.svg'
import gridimage1 from '../assets/gridimage1.png'
import gridimage2 from '../assets/gridimage2.png'
import gridimage3 from '../assets/gridimage3.png'
import gridimage4 from '../assets/gridimage4.png'
import gridimage5 from '../assets/gridimage5.png'
import profilePic from '../assets/jay-image.jpeg'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
function About() {
    return (
        <>
        <Header></Header>
        <div className='max-w-2xl sm:max-w-5xl px-5 mx-auto '>
            <div className='flex justify-center py-20'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-start w-full max-w-xl md:max-w-5xl pt-30'>

                    {/* Image Section */}
                    <div className='w-full h-full'>
                        <img src={profilePic} alt="" className='rounded-2xl object-cover h-auto' />
                    </div>

                    {/* Text Content */}
                    <div className='flex flex-col md:col-span-2 max-w-xl '>
                        <h4 className='text-green-600 font-semibold mb-2'>About me</h4>
                        <div className='bg-white rounded-xl mb-4'>
                            <p className='text-lg mb-4'>
                                {/* Hello, I’m Jay. I'm a designer passionate about creating beautiful, intuitive interfaces that help people. I focus on thoughtful details, seamless experiences, and meaningful impact. */}
                            Mid-level UI/UX & Service Designer with 3+ years of
experience in B2B and B2C products across SaaS and Ecommerce. Skilled in user research, wireframing,
prototyping, interaction design, and design systems.
Proficient in Figma, Adobe XD, and responsive design,
with working knowledge of HTML and CSS for effective
collaboration with developers.
                            </p>
                            {/* <p className='text-lg font-semibold'>
                                Discover how to use Procreate’s brushes and colors, along with all the essential gestures and tools you need to begin creating digital art on iPad.
                            </p> */}
                        </div>
                        <div className='flex gap-4 mt-2 flex-wrap'>
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
                </div>
            </div>

            {/* <div className='flex justify-center items-center min-h-screen py-20'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className='md:row-span-2 rounded-2xl'>
                        <img src={gridimage1} alt="" className='h-full w-full' />
                    </div>
                    <div className='md:col-span-2 rounded-2xl'>
                        <img src={gridimage2} alt="" className='h-full w-full' />
                    </div>
                    <div className='order-first md:order-none rounded-2xl bg-gradient-to-b from-lime-400 to-green-600 p-6 flex flex-col justify-center h-full'>
                        <span className="text-green-900 font-semibold italic mb-2 text-lg">B-Side</span>
                        <p className="text-white font-medium text-2xl">
                            Personal project for skills enhancement and self-driven initiatives that can help you learn and develop new skills.
                        </p>
                    </div>
                    <div className='rounded-2xl'><img src={gridimage3} alt="" className='h-full w-full ' /></div>
                    <div className='rounded-2xl md:col-span-2'><img src={gridimage4} alt="" className='h-full w-full' /></div>
                    <div className='rounded-2xl '><img src={gridimage5} alt="" className='h-full w-full' /></div>
                </div>
            </div> */}
        </div>
        <Footer></Footer>
        </>

    )
}

export default About