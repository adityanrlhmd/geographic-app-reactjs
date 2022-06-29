import React from 'react'

function SidenavAdmin() {
  return (
    <div className='w-64 bg-white p-5 h-full fixed'>
        <h1 className='font-bold text-center text-xl text-sky-900 uppercase'>Accident <br/> Geographic Map</h1>
        <h1 className='font-bold text-center mt-9 mb-4 text-md text-sky-900'>Kategori Per Tahun</h1>
        <div className="container mx-auto w-32  flex flex-col gap-6">
          <button className='rounded bg-primary text-white border border-primary px-5 py-2 hover:-translate-y-2 transition ease-in-out duration-500'>
            2017
          </button>
          <button className='rounded bg-primary text-white border border-primary px-5 py-2 hover:-translate-y-2 transition ease-in-out duration-500'>
            2018
          </button>
          <button className='rounded bg-primary text-white border border-primary px-5 py-2 hover:-translate-y-2 transition ease-in-out duration-500'>
            2019
          </button>
          <button className='rounded bg-primary text-white border border-primary px-5 py-2 hover:-translate-y-2 transition ease-in-out duration-500'>
            2020
          </button>
          <button className='rounded bg-primary text-white border border-primary px-5 py-2 hover:-translate-y-2 transition ease-in-out duration-500'>
            2021
          </button>
        </div>
    </div>
  )
}

export default SidenavAdmin