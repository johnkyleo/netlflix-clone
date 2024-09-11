import React, { useCallback, useState } from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { BsSearch, BsBell } from "react-icons/bs";
import Navbaritem from './Navbaritem';
import Mobilemenu from './Mobilemenu';



const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const toggleMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    },[setShowMobileMenu])
  return (
    <nav className='w-full z-40'>
        <div className='px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-slate-950 bg-opacity-90'>
            <img className='h-4 lg:h-7' src='/images/netflix.png' alt='icon' />
            {/* Large Screen */}
            <div className='flex-row ml-8 gap-7 hidden lg:flex'>
            <Navbaritem label='Home'/>
            <Navbaritem label='Series'/>
            <Navbaritem label='Films'/>
            <Navbaritem label='New & Popular'/>
            <Navbaritem label='My List'/>
            <Navbaritem label='Browse by languages'/>
            </div>
            {/* Small Screen */}
            <div onClick={toggleMenu}className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                <p className='text-white text-sm'>Browse</p>
                <FaChevronDown className='text-white transition'/>
                <Mobilemenu visible={showMobileMenu}/>
            </div>

            <div className='flex flex-row ml-auto gap-7 items-center'>
                <div className='text-gray-200 hover:text=gray-300 cursor-pointer transition'>
                <BsSearch />
                </div> 
                <div className='text-gray-200 hover:text=gray-300 cursor-pointer transition'>
                <BsBell />
                </div> 
                <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
                    <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="profile" />
                    </div>
                    <FaChevronDown className='text-white transition'/>
                    
                </div>            
            </div>
        </div>
    </nav>
  )
}

export default Navbar
