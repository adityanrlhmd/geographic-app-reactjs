import React, { useState } from 'react'
import { FaSearch, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../../../store/auth/authSlice';

function NavbarAdmin({data, placeholder}) {
    const [dropdown, setDropdown] = useState(true)
    const [filterData, setFilterData] = useState([])
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.street.toLowerCase().includes(searchWord?.toLowerCase())
        });
        if (searchWord === "") {
            setFilterData([]);
        } else {
            setFilterData(newFilter);
        }
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
  return (
        <div className='container flex justify-end ml-auto py-3 px-6'>
            <form>
                <div className='w-72 flex bg-white rounded-lg px-4 py-2 text-gray-400 drop-shadow-lg transition duration-300 ease-in-out'>
                    <input type='text' className=' text-md focus:outline-none px-2 text-black w-full' placeholder={placeholder} onChange={handleFilter}/>
                    <span className='my-auto text-md'> <FaSearch/> </span>
                </div>
                <div className='overflow-hidden'>
                {filterData.length !== 0 ? (
                    <div className={`w-72 absolute mt-1 rounded-lg drop-shadow-lg flex flex-wrap overflow-y-auto overflow-hidden bg-white p-2 z-40 transition ease-in-out duration-700 `}>
                    {filterData.map((value, key) => {
                        return (
                            <div role='button' className='py-2 px-3 cursor-pointer hover:bg-gray-100 rounded-lg text-black'> 
                                <p>{value.street}</p>    
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
                <button onClick={() => setDropdown(current => !current)}><FaUser/></button>
            </div>
                <div className={`absolute bg-white rounded flex flex-col p-2 top-14 drop-shadow-xl transition ease-in-out duration-300 ${dropdown ? 'hidden' : ''}`}>
                    <Link to='/' className='hover:bg-gray-200 px-2 rounded-lg text-primary'>Back to Home</Link>
                    <button onClick={onLogout} className='hover:bg-gray-200 px-2 rounded-lg text-primary'>Logout</button>
                </div>
        </div>
  )
}

export default NavbarAdmin