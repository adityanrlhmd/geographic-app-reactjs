import React, {useState, useCallback, useEffect} from 'react'
import {CgController} from "react-icons/cg"

const center = [-6.9208, 106.9258]
const zoom = 13

const MapLock = ({ map }) => {
    const [position, setPosition] = useState(() => map.getCenter())
  
    const onClick = useCallback(() => {
      map.setView(center, zoom)
    }, [map])
  
    const onMove = useCallback(() => {
      setPosition(map.getCenter())
    }, [map])
  
    useEffect(() => {
      map.on('move', onMove)
      return () => {
        map.off('move', onMove)
      }
    }, [map, onMove])
  return (
    <div className='absolute top-3 right-3 z-[999] bg-white rounded-sm border-2 border-gray-300 cursor-pointer hover:bg-gray-100'>
        <button className='p-1.5 text-lg' onClick={onClick}><CgController/></button>
    </div>
  )
}

export default MapLock
