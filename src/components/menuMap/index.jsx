import React, {useState, Fragment, useEffect} from 'react'
import {BsCalendarWeek} from 'react-icons/bs'
import { useDispatch, useSelector} from 'react-redux';
import { getMaps } from '../../store/mapSlice'
import Search from '../search';

function MenuMap() {
    const maps = useSelector(state => state.maps.maps);
    const mapsState = useSelector(state => state.maps.mapsState);
    const dispatch = useDispatch();

    useEffect( () => {
        if (mapsState==='fill'){
          dispatch(getMaps());
        }
      }, [mapsState, dispatch]);

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
        <div className='absolute max-w-5xl left-4 top-4 z-[999] flex items-start flex-wrap'>
            {/* Search*/}
            <div className='search'>
                <Search placeholder='Find Point' status={true} data={maps} menu={menuClick} show={show} width={true}/>
            </div>
            {/* End Search */}
            <div className='mobile'>
            <button onClick={categoryClick} className="drop-shadow-lg bg-white text-xl rounded-full px-3 py-3 ml-5 hover:bg-gray-100 hover:outline-gray-100 z-30 ">
                <BsCalendarWeek/>
            </button>
            <div className='flex md:hidden pl-5 overflow-x-hidden py-1'>            
                <div className={`transition flex flex-col ease-in-out duration-1000 z-20 mr-5 ${showCategory ? '' : '-translate-y-full'}`}>
                    <button className={`bg-white mx-0 my-1 drop-shadow-lg px-2 py-2 rounded-lg hover:bg-gray-100  transition ease-in-out duration-1000 ${showCategory ? '' : ''}`}>
                        2017
                    </button>
                    <button className={`bg-white mx-0 my-1 drop-shadow-lg px-2 py-2 rounded-lg hover:bg-gray-100  transition ease-in-out duration-1000 ${showCategory ? '' : ''}`}>
                        2018
                    </button>
                    <button className={`bg-white mx-0 my-1 drop-shadow-lg px-2 py-2 rounded-lg hover:bg-gray-100  transition ease-in-out duration-1000 ${showCategory ? '' : ''}`}>
                        2019
                    </button>
                    <button className={`bg-white mx-0 my-1 drop-shadow-lg px-2 py-2 rounded-lg hover:bg-gray-100 transition ease-in-out duration-1000 ${showCategory ? '' : ''}`}>
                        2020
                    </button>
                    <button className={`bg-white mx-0 my-1 drop-shadow-lg px-2 py-2 rounded-lg hover:bg-gray-100 transition ease-in-out duration-1000 ${showCategory ? '' : 'drop-shadow-none'}`}>
                        2021
                    </button>
                </div>
            </div>
            </div> 
            <div className='flex pl-5 hidden md:block overflow-x-hidden py-1'>            
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
        <div className={`fixed z-[998] w-1/2 md:w-[26rem] bg-white h-full left-0 transition ease-in-out duration-700  ${show ? '-translate-x-full' : ''}`}></div>
    </Fragment>
  )
}

export default MenuMap