import React, { useState, useEffect } from 'react'
import './header.css'

function Header() {
    // Navbar
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(offset); 

    // Hamburger
    const [navActive, setNavActive] = useState(false);

    const handleClick = () => {
        setNavActive(current => !current);
    }
    // End Hamburger

  return (
    <header className={` absolute top-0 h-screen items-center z-10 font-sans flex flex-col ${offset ? "navbar-fixed" : ""}`}>
        <div className='container w-16 flex flex-col'>
            <div className="wrap-hamburger py-3">
                <button id='hamburger' onClick={handleClick} name='hamburger' type='button' className={`block absolute right-4 ${navActive ? "hamburger-active" : ""} `}>
                    <span className='hamburger-line my-2 block bg-primary transition duration-300 ease-in-out origin-top-left'></span>
                    <span className='hamburger-line my-2 block bg-primary transition duration-300 ease-in-out'></span>
                    <span className='hamburger-line my-2 block bg-primary transition duration-300 ease-in-out origin-bottom-left'></span>
                </button>

                {/* <nav id='nav-menu' className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-0 top-full ${navActive ? " " : "hidden"}`}>
                    <ul className='block'>
                        <li className='group'>
                            <a className='text-base text-dark py-2 mx-8 flex group-hover:text-primary '>Beranda</a>
                        </li>
                        <li className='group'>
                            <a className='text-base text-dark py-2 mx-8 flex group-hover:text-primary '>Tentang </a>
                        </li>
                        <li className='group'>
                            <a className='text-base text-dark py-2 mx-8 flex group-hover:text-primary '>FAQ</a>
                        </li>
                    </ul>
                </nav> */}

            </div>
        </div>
        {/* <div className='container mx-auto xl:max-w-7xl'>
            <div className='flex items-center justify-between relative'>
                <div className='ml-6 md:ml-0'>
                    <a href='/home' className='font-bold text-lg block py-6 text-primary'>
                        ACC
                    </a>
                </div>
            </div>
        </div> */}
    </header>
  )
}

export default Header