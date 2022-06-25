import React, { useState } from 'react'
import { FaSearch, FaUser } from 'react-icons/fa';

function NavbarAdmin({data, placeholder}) {
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
        <div className='container flex justify-end ml-auto py-3 px-6'>
            <form>
                <div className='w-full flex ml-5 bg-white rounded-lg px-4 py-2 text-gray-400 drop-shadow-lg transition duration-300 ease-in-out'>
                    <input type='text' className=' text-md focus:outline-none px-2 text-black w-full' placeholder={placeholder} onChange={handleFilter}/>
                    <span className='my-auto text-md'> <FaSearch/> </span>
                </div>
                <div className='overflow-hidden'>
                {filterData.length !== 0 ? (
                    <div className={`w-full dataResults mt-1 rounded-lg drop-shadow-lg flex flex-wrap overflow-y-auto overflow-hidden bg-white p-2 z-40 transition ease-in-out duration-700 `}>
                    {filterData.map((value, key) => {
                        return (
                            <div role='button' className='py-2 px-3 cursor-pointer hover:bg-gray-100 rounded-lg text-black'> 
                                <p>{value.text2}</p>    
                            </div>
                        )
                    })}
                    </div>
                ) : (
                    <div className={`w-full transition ease-in-out duration-700 -translate-y-full`}>
                    </div>
                )}
                </div>
            </form>
            <div className=' my-auto ml-12'>
                <FaUser/>
            </div>
        </div>
  )
}

export default NavbarAdmin