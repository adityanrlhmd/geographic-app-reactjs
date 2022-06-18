import React, {useState, Fragment} from 'react'
import { FaSearch } from 'react-icons/fa'
import {BsCalendarWeek} from 'react-icons/bs'

function MenuMap() {
    const [show, setShow] = useState(true);
    const menuClick = () => {
      setShow(current => !current);
    }

    const [showCategory, setShowCategory] = useState(true);
    const categoryClick = () => {
      setShowCategory(current => !current);
    }
    
  return (
    <Fragment>
        <div className='absolute max-w-5xl left-4 top-4 z-[999] flex flex-wrap'>
            {/* Search*/}
            <div className='w-60 sm:w-80 md:w-96 flex bg-white rounded-lg px-4 py-2 text-gray-400 drop-shadow-lg transition duration-300 ease-in-out z-40'>
                <button onClick={menuClick} className={`text-2xl text-black mr-2 transition duration-700 ease-in-out ${show ? '' : '-mr-[2px]'}`}> 
                    <span className={`w-7 h-[2px] my-[6px] block bg-primary transition duration-300 ease-in-out origin-top-left ${show ? '' : 'rotate-45 w-6'}`}></span>
                    <span className={`w-7 h-[2px] my-[6px] block bg-primary transition duration-300 ease-in-out ${show ? '' : 'scale-0'}`}></span>
                    <span className={`w-7 h-[2px] my-[6px] block bg-primary transition duration-300 ease-in-out origin-bottom-left ${show ? '' : '-rotate-45 w-6'}`}></span>
                </button>
                <input className='border-l-2 text-lg focus:outline-none px-2 text-black w-full' placeholder='Find point' />
                <span className='my-auto text-lg'> <FaSearch/> </span>
            </div>
            {/* End Search */}
                <button onClick={categoryClick} className="drop-shadow-lg bg-white text-xl my-auto rounded-full px-3 py-3 ml-5 hover:bg-gray-100 hover:outline-gray-100 z-30">
                    <BsCalendarWeek/>
                </button> 
                <div className='flex pl-5 overflow-hidden'>            
                <div className={`flex transition ease-in-out duration-1000 z-20 mr-5 ${showCategory ? '' : '-translate-x-[450px]'}`}>
                    <button className={`bg-white drop-shadow-lg px-5 py-2 my-auto rounded-lg hover:bg-gray-100 flex transition ease-in-out duration-1000 ${showCategory ? '' : ''}`}>
                        2017
                    </button>
                    <button className={`bg-white ml-5 drop-shadow-lg px-5 py-2 my-auto rounded-lg hover:bg-gray-100 flex transition ease-in-out duration-1000 ${showCategory ? '' : ''}`}>
                        2018
                    </button>
                    <button className={`bg-white ml-5 drop-shadow-lg px-5 py-2 my-auto rounded-lg hover:bg-gray-100 flex transition ease-in-out duration-1000 ${showCategory ? '' : ''}`}>
                        2019
                    </button>
                    <button className={`bg-white ml-5 drop-shadow-lg px-5 py-2 my-auto rounded-lg hover:bg-gray-100 flex transition ease-in-out duration-1000 ${showCategory ? '' : ''}`}>
                        2020
                    </button>
                    <button className={`bg-white ml-5 drop-shadow-lg px-5 py-2 my-auto rounded-lg hover:bg-gray-100 flex transition ease-in-out duration-1000 ${showCategory ? '' : ''}`}>
                        2021
                    </button>
                </div>
            </div>
        </div>
        <div className={`fixed z-[998] w-[26rem] bg-white h-full left-0 transition ease-in-out duration-700  ${show ? '-translate-x-full' : ''}`}></div>
    </Fragment>
  )
}

export default MenuMap