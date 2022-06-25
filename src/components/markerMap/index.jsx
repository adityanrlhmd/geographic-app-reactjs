import React, { useState } from 'react'
import { Marker } from 'react-leaflet'

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
          <div className={`absolute right-32 top-1/4 z-[999] ${show ? "hidden" : ""}`}>
            <div className="max-w-xs rounded-lg p-5 bg-white">{props.text}</div>
          </div>
        </Marker>
    </>
  )
}

export default MarkerMap