import React, {useState, useCallback, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';

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
    <div className='absolute top-3 right-3 z-[999] bg-white rounded-sm border-2 border-gray-300 cursor-pointer'>
        <button className='p-1.5' onClick={onClick}><FilterTiltShiftIcon/></button>
    </div>
  )
}

function MapComponent() {
    const [map, setMap] = useState(null)

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={true} ref={setMap} zoomControl={false} className='relative'>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position='bottomright'/>
        <Marker position={center}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        {map ? <MapLock map={map} /> : null}
    </MapContainer>
  )
}

export default MapComponent