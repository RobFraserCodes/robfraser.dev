'use client';



import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { UserIcon } from '@heroicons/react/24/outline';

type Props = {}

function NavBar({}: Props) {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
      
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false);
        }
    };

    const [state, setState] = useState(false)
    const navRef = useRef()
  
    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "About", path: "#about" },
        { title: "Skills", path: "#skills" },
        { title: "Portfolio", path: "#portfolio" },
        { title: "Blog", path: "#blog" },
        { title: "Contact", path: "#contact" }
    ]

    useEffect(() => {
      
        const body = document.body
  
        // Disable scrolling
        const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"]
        if (state) body.classList.add(...customBodyStyle)
        // Enable scrolling
        else body.classList.remove(...customBodyStyle)
  
        // Sticky strick
        const customStyle = ["sticky-nav", "fixed", "border-b"]
        window.onscroll = () => {
            if (window.scrollY > 80) navRef.current.classList.add(...customStyle)
            else navRef.current.classList.remove(...customStyle)
        }
      }, [state])
      
  
    return (
        <nav ref={navRef} className="bg-white w-full top-0 z-20 py-4">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
                <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
                      <a href="#hero">
                          <img
                              src="/logo.svg" 
                              width={200} 
                              height={80}
                              alt="Rob Fraser logo"
                          />
                      </a>
                    <div className="lg:hidden">
                        <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${ state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'}`}>
                      <div>
                          <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                              <li className="mt-4 lg:mt-0">
                                  <a href="/CVPage" className="py-3 px-4 text-center border text-gray-600 hover:text-purple-600 hover:bg-secondary rounded-md block lg:inline lg:border-0 font-medium mb-20 uppercase">
                                      Rob's CV
                                  </a>
                              </li>
                              <li className="mt-8 lg:mt-0">
                                  <a href="/Enquiry" className="py-3 px-4 text-center text-white font-normal bg-purple-600 hover:bg-purple-700 rounded-md shadow block lg:inline">
                                      Hire Me
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div className="flex-1 pl-4">
                          <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                              {
                                  navigation.map((item, idx) => {
                                      return (
                                          <li key={idx} className="text-purple-700 hover:text-purple-900 font-light hover:font-semibold uppercase">
                                              <a href={item.path}>
                                                  { item.title }
                                              </a>
                                          </li>
                                      )
                                  })
                              }
                          </ul>
                      </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;