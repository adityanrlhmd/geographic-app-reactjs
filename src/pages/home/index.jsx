import React from 'react'
import './home.css'
import Header from '../../components/header'
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MapComponent from '../../components/map';
import { Link } from 'react-router-dom';


function Home() {

  return (
    <div className='wrap-content font-sans bg-sky-100'>
        <Header/>    
        <div className='container mx-auto w-full md:ml-20 h-screen xl:max-w-7xl px-16 md:px-0 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-4'>
            <div className='col-span-1 h-full grid justify-center content-center'>
                <div className='wrap-text text-left font-mono text-sky-900'>
                    <h4 className='text-md mb-2'>SUKABUMI CITY</h4>
                    <h1 className='text-4xl md:text-4xl mb-6 font-bold'> ACCIDENT <br/> GEOGRAPHIC MAP</h1>
                </div>
                <form>
                    <div className=' w-full flex bg-white rounded-lg px-3 py-2 text-gray-400 mb-8'>
                        <span><SearchIcon/></span>
                        <input className=' focus:outline-none px-2' placeholder='Find point' />
                    </div>
                </form>

                <Link to='/map' className='mx-auto rounded-full bg-sky-800 w-44  px-0 text-md text-white font-semibold hover:bg-sky-900 transition duration-200 ease-in-out flex items-center justify-center'>
                    Get statistics <span className='ml-1'> <ArrowRightAltIcon fontSize='large'/> </span>
                </Link>
            </div>
            <div className="exampleMap col-span-3 w-full">
                <div className="flex items-center justify-center h-full md:px-16 pb-4 md:py-8">
                <MapComponent/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home