import React, { useState } from 'react'
import { Marker } from 'react-leaflet'

export const PopupMap = (get, {available}) => {
  if (!available) return null;

  return (
      <div className="absolute right-32 top-1/4 z-[999]">
        <div className="max-w-xs rounded-lg p-5 bg-white">Lorem ipsum dolor sit amet.</div>
      </div>
  )
}

function MarkerMap(props) {
    const latde = props.latde
    const longtde = props.longtde
    const marker = [latde, longtde]

    const [show, setShow] = useState(true);
    const handleClick = () => {
      setShow(current => !current);
  }
  return (
    <>
        <Marker key="{e.no}" position={marker} eventHandlers={{ click: handleClick }}>
          <div className={`absolute right-32 top-1/4 z-[999] ${show ? "hidden" : ""}`}>
            <div className="max-w-xs rounded-lg p-5 bg-white">{props.text}</div>
          </div>
        </Marker>
    </>
  )
}

export default MarkerMap