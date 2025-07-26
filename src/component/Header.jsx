import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'
import { X, Menu } from 'lucide-react';
import { useState } from "react";
import logo from '../assets/logo.svg'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <div className='flex justify-center w-full'>
        <header className="fixed top-4 z-50 w-full max-w-2xl px-4">
          {!isOpen && (
            <nav className="flex justify-between items-center bg-white px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border border-gray-200">
              <div className="flex items-center">
                <Link to="/"><img src={logo} alt="ova" className="h-8" /></Link>
              </div>
              <div className="md:flex hidden items-center">
                <Link to="/" className={`px-5 py-1.5 rounded-full font-medium ${location.pathname === '/' ? 'bg-[#12B76A] text-white' : 'text-gray-600'}`}>Work</Link>
                <Link to="/about" className={`px-5 py-1.5 rounded-full font-medium ${location.pathname === '/about' ? 'bg-[#12B76A] text-white' : 'text-gray-600'}`}>About</Link>
                <Link to="/contact" className={`px-5 py-1.5 rounded-full font-medium ${location.pathname === '/contact' ? 'bg-[#12B76A] text-white' : 'text-gray-600'}`}>Contact</Link>
                <Link to="/resume" className={`px-5 py-1.5 rounded-full font-medium ${location.pathname === '/resume' ? 'bg-[#12B76A] text-white' : 'text-gray-600'}`}>Resume</Link>                
              </div>
              <button className="md:hidden" onClick={() => setIsOpen(true)}>
                <Menu className="text-green-600 w-6 h-6" />
              </button>
            </nav>
          )}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 1, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.99, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white px-6 py-4 rounded-3xl shadow-lg backdrop-blur-sm border border-gray-200"
              >
                <div className="flex justify-between items-start">
                  <img src={logo} alt="ova" className="h-8" />
                  <button onClick={() => setIsOpen(false)}>
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="mt-6 flex flex-col items-center gap-4 text-center">
                  <Link to="/" className={`px-5 rounded-full py-1.5 text-gray-800 font-medium ${location.pathname === '/' ? 'bg-[#12B76A] text-white' : 'text-gray-800'}`}>Work</Link>
                  <Link to="/about" className={`px-5 rounded-full py-1.5 text-gray-800 font-medium ${location.pathname === '/about' ? 'bg-[#12B76A] text-white' : 'text-gray-800'}`}>About</Link>
                  <Link to="/contact" className={`px-5 rounded-full py-1.5 text-gray-800 font-medium ${location.pathname === '/contact' ? 'bg-[#12B76A] text-white' : 'text-gray-800'}`}>Contact</Link>
                  <Link to="/resume" className={`px-5 rounded-full py-1.5 text-gray-800 font-medium ${location.pathname === '/resume' ? 'bg-[#12B76A] text-white' : 'text-gray-800'}`}>Resume</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>
  )
}

export default Header