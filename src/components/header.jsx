
import React, { useState } from 'react'
import { FaQuestion, FaCaretDown } from "react-icons/fa"; 
import { GoUnlink } from "react-icons/go";
import { FaShareAlt } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";

const Header = () => {
  const [isHelpAbbrOpen, setIsHelpAbbrOpen] = useState(false)
  const [isFeatureOpen, setIsFeatureOpen] = useState(false)

  const handleHelpAbbrClose = () => setIsHelpAbbrOpen(false)
  const handleHelpAbbrOpen = () => setIsHelpAbbrOpen(true)
  const toggleFeatureMenu = () => setIsFeatureOpen(!isFeatureOpen)

  return (
    <div className=" min-h-screen relative pb-[120px] bg-[#012C4B] h-[1100px]">
      <div className=' text-white flex justify-between items-center py-4 px-8 '>
        <header className='fixed z-50 flex px-8 py-4 bg-[#012C4B] w-full top-0'>
          <div className=' text-4xl font-extrabold relative bottom-[2px] '>
            <a href="http://localhost:5173/ ">TINYURL</a>
          </div>

          <div className="flex items-center gap-x-2">
            <div className="relative">
              <div
                className="bg-[#0980A1] p-2 rounded-full cursor-pointer relative bottom-[3px] left-[430px] hover:bg-[#04527F] "
                onMouseOver={handleHelpAbbrOpen}
                onMouseLeave={handleHelpAbbrClose}
              >
                <FaQuestion />
              </div>
              {isHelpAbbrOpen && (
                <div className="bg-[#0980A1] p-2 rounded absolute top-[33px] left-[420px] ">
                  help
                </div>
              )}
            </div>

            <div className="flex bg-[#0980A1] rounded gap-x-2 relative top-[-3px] left-[430px] ">
              <div className="font-medium hover:bg-[#10BDE5] hover:cursor-pointer px-[14px] py-[10px] rounded">
                My URLs
              </div>
              <div className="font-medium hover:bg-[#10BDE5] hover:cursor-pointer px-[14px] py-[10px] rounded">
                Plans
              </div>
              <div className="font-medium hover:bg-[#10BDE5] hover:cursor-pointer px-[14px] py-[10px] rounded">
                Blogs
              </div>

              {/* Features Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleFeatureMenu}
                  className="flex items-center gap-1 font-medium hover:bg-[#10BDE5] hover:cursor-pointer px-[14px] py-[10px] rounded"
                  aria-haspopup="menu"
                  aria-expanded={isFeatureOpen}
                >
                  Features
                  <FaCaretDown className="text-white" size={16} />
                </button>

                {isFeatureOpen && (
                  <div className="absolute mt-2 bg-white text-black rounded shadow-lg w-70 right-[30px] h-[250px]">
                    <ul className="flex flex-col">
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Link Management</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Branded & Customized Links</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Custom Branded Domains</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Campaign Monitoring & Analytics</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">How It Works</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">About TinyURL</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="font-medium hover:bg-[#10BDE5] hover:cursor-pointer px-[14px] py-[10px] rounded">
                Sign Up
              </div>
              <div className="font-medium hover:bg-[#10BDE5] hover:cursor-pointer px-[14px] py-[10px] rounded">
                Sign In
              </div>
            </div>
          </div>
        </header>

        <div className='flex'>
          <div className=' bg-white/94 relative top-[80px] right-[-20px] h-[360px] rounded-lg w-[400px]'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/TinyURL.png" alt="Tiny URL" className='w-[19px] relative top-[20px] left-[15px]'/>
            <p className='text-black relative top-[-4px] left-[39px] text-lg cursor-default '>
              Shorten a long URL
            </p>
            <input
              type="link"
              placeholder='Enter link here '
              className=' relative top-[25px] left-[20px] w-90 rounded border border-gray-300 rounded-lg p-3 text-black  focus:outline-none'
            />
            <p className='relative top-[55px] left-[39px] text-black cursor-default text-lg '>
              Customize your link
              <div className='relative top-[-22px] left-[-22px] '><GoUnlink /></div>
            </p>
            <input
              type="text"
              placeholder="tinyurl.com"
              className='relative top-[65px] left-[20px] text-black border border-gray-300 rounded-lg p-3 w-[230px] focus:outline-none'
            />
            <input
              type="text"
              placeholder='Enter alias'
              className=' relative top-[65px] left-[35px] text-black border border-gray-300 rounded-lg w-[115px] p-3 focus:outline-none'
            />

            
            <button className='hover:bg-green-900 bg-green-700 relative top-[100px] mx-5 rounded-lg cursor-pointer w-[350px] py-3 text-white font-medium'>
              Shorten URL
            </button>
          </div>

          <div className=''>
            <h1  className='absolute top-[100px] left-[500px] w-[250px] text-3xl font-bold' >
              The Original URL Shortener
            </h1>
            <p className='absolute top-[200px] left-[500px] '>Create shorter URLs with TinyURL.</p>
            <p className='absolute top-[250px] left-[500px] w-[320px] '>
              Want more out of your link shortener? Track link analytics, use branded domains for fully custom links, and manage your links with our paid plans.
            </p>
            <p className='hover:bg-white hover:text-black absolute top-[380px] right-[620px] w-[150px] border border-white flex items-center justify-center p-2 rounded cursor-pointer'>
              View Plans
            </p>
            <p className='bg-white absolute top-[380px] right-[400px] w-[200px] border border-white p-2 rounded text-black flex items-center justify-center cursor-pointer'>
              Create Free Acccount
            </p>
            <div className='absolute top-[460px] left-[500px]'>
              <div>
                TinyURL plans include:
              </div>
              <br />
              <div className='relative top-[-10px] left-[30px]'>
                <TbBrandGoogleAnalytics className='relative top-[20px] right-[30px]' />
                Detailed Link Analytics
              </div>
              <div className='relative top-[-12px] left-[30px]'>
                <AiOutlineGlobal className='relative top-[20px] right-[30px]'/>
                Fully Branded Domains
              </div>
              <div className='relative top-[-14px] left-[30px]'>
                <FiLink  className='relative top-[20px] right-[30px]' />
                Bulk Short URLs
              </div>
              <div className='relative top-[-14px] left-[32px]'>
                <FaShareAlt className='relative top-[22px] right-[31px]'/>
                Link Management Features
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (unchanged) */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white h-[40px] z-5">
        <div className="max-w-6xl mx-auto h-full grid grid-cols-2 md:grid-cols-4 gap-8 px-6 items-center  ">
          <ul className='flex items-center '>
            <il className='absolute left-10'>Copyright ©</il>
            <il className='absolute left-34'>TinyURL LLC  •</il>
            <il className='absolute left-60 hover:underline cursor-pointer'> Terms  •  </il>
            <il className='absolute left-75 hover:underline cursor-pointer'>Privacy Policy  • </il>
            <il className='absolute left-105 hover:underline cursor-pointer'> Accessibility  •  </il>
         </ul>
        </div>
      </footer>
    </div>
  )
}

export default Header