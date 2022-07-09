import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { Marker, Popup } from 'react-leaflet'

function MarkerMap(props) {
    const latde = props.latde
    const longtde = props.longtde

    const [show, setShow] = useState(true);
    const handleClick = () => {
      setShow(current => !current);
  }
  return (
    <>
        <Marker key={props.id} position={[latde, longtde]} eventHandlers={{ click: handleClick }}>
          <div className={`fixed w-full bottom-0 md:w-auto md:absolute md:right-32 md:top-1/4 z-[999] transition ease-in-out duration-400 drop-shadow-2xl ${show ? " translate-x-full md:scale-0" : ""}`}>
            <div className='absolute right-3 top-2'>
              <button onClick={handleClick} className='text-2xl md:text-lg'><IoMdClose/></button>
            </div>
            <div className="max-w-lg rounded-lg p-5 bg-white">
              <h1 className='font-bold'>{props.year}</h1>
              <div className="grid grid-cols-3 gap-4">
              <div className="first">
                <p className='mb-3 normal-case'>{props.street}</p>
                <p className='mb-3'>{props.text}</p>
                <p className='mb-3'>{props.date}</p>
              </div>
              <div className="second">
                <p className='mb-3 normal-case'>{props.street2}</p>
                <p className='mb-3'>{props.text2}</p>
                <p className='mb-3'>{props.date2}</p>
              </div>
              <div className="third">
                <p className='mb-3 normal-case'>{props.street3}</p>
                <p className='mb-3'>{props.text3}</p>
                <p className='mb-3'>{props.date3}</p>
              </div>
              </div>
            </div>
          </div>
          <Popup><h2 className='text-center'>{props.latde}, {props.longtde}</h2></Popup>
        </Marker>
    </>
  )
}

export default MarkerMap