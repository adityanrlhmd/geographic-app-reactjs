import React, {Fragment, useState} from 'react'
import { FaSearch } from 'react-icons/fa';

function Search({placeholder, data, status, menu, show, width}) {

    const [filterData, setFilterData] = useState([])
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.text2.toLowerCase().includes(searchWord?.toLowerCase())
        });
        if (searchWord === "") {
            setFilterData([]);
        } else {
            setFilterData(newFilter);
        }
    }
  return (
    <Fragment>
        {status ? (
            <div className='w-60 sm:w-80 md:w-96 flex  bg-white rounded-lg px-4 py-2 text-gray-400 drop-shadow-lg transition duration-1000 ease-in-out z-40'>
                <button onClick={menu} className={`text-2xl text-black pr-2 transition duration-700 ease-in-out border-r-2${show ? '' : '-mr-[2px]'}`}> 
                    <span className={`w-7 h-[2px] my-[6px] block bg-primary transition duration-300 ease-in-out origin-top-left ${show ? '' : 'rotate-45 w-6'}`}></span>
                    <span className={`w-7 h-[2px] my-[6px] block bg-primary transition duration-300 ease-in-out ${show ? '' : 'scale-0'}`}></span>
                    <span className={`w-7 h-[2px] my-[6px] block bg-primary transition duration-300 ease-in-out origin-bottom-left ${show ? '' : '-rotate-45 w-6'}`}></span>
                </button>
                <input type='text' className=' text-lg focus:outline-none px-2 text-black w-full' placeholder={placeholder} onChange={handleFilter}/>
                <span className='my-auto text-lg'> <FaSearch/> </span>
            </div>
        ) : (
            <div className='w-full flex  bg-white rounded-lg px-4 py-2 text-gray-400 drop-shadow-lg transition duration-300 ease-in-out z-40'>
                <input type='text' className=' text-lg focus:outline-none px-2 text-black w-full' placeholder={placeholder} onChange={handleFilter}/>
                <span className='my-auto text-lg'> <FaSearch/> </span>
            </div>
        )}
        <div className='overflow-hidden'>
        {filterData.length !== 0 ? (
            <div className={`${width ? 'w-60 sm:w-80 md:w-96' : 'w-full'} dataResults mt-1 rounded-lg drop-shadow-lg flex flex-wrap overflow-y-auto overflow-hidden bg-white p-2 z-40 transition ease-in-out duration-700 `}>
            {filterData.map((value, key) => {
                return (
                    <div role='button' className='py-2 px-3 cursor-pointer hover:bg-gray-100 rounded-lg text-black'> 
                        <p>{value.text2}</p>    
                    </div>
                )
            })}
            </div>
        ) : (
            <div className={`${width ? 'w-60 sm:w-80 md:w-96' : 'w-full'} transition ease-in-out duration-700 -translate-y-full`}>
            </div>
        )}
        </div>
    </Fragment>
  )
}

export default Search