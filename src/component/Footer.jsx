import aeroUp from '../assets/aero-up.svg'


const Footer = () => {
  return (
    <section className='bg-[#F4F6F9]'>
        <div className='flex flex-col items-center text-center max-w-2xl mx-auto py-10'>
          <h2 className='text-md font-semibold text-gray-600 mb-4'>
            Let's Build Something Together
          </h2>

          <p className='text-2xl md:text-4xl font-bold text-gray-900 mb-8'>
             jaychovatiya786@gmail.com
          </p>

          <div className='flex gap-2'>
            <a
              href="https://www.linkedin.com/in/jay-chovatiya-121392182"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 rounded-full px-4 py-2 text-sm text-black flex items-center gap-1 hover:bg-black hover:text-white transition"
            >
              LinkedIn
              <img src={aeroUp} alt="" className='w-4 h-4' />
            </a>
            {/* <a
              href="https://x.com/Jaichovatiya?t=tJ9Q9Ye8biqg1pgYJ6Xbaw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 rounded-full px-4 py-2 text-sm text-black flex items-center gap-1 hover:bg-black hover:text-white transition"
            >
              X (Twitter)
              <img src={aeroUp} alt="" className='w-4 h-4' />
            </a> */}
            <a
              href="mailto:jaychovatiya786@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 rounded-full px-4 py-2 text-sm text-black flex items-center gap-1 hover:bg-black hover:text-white transition"
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
  )
}

export default Footer