import React, {useState, useEffect} from 'react'
import './home.css'
import Header from '../../components/header'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getMaps } from '../../store/mapSlice'
import MarkerMap from '../../components/markerMap';
import MapLock from '../../components/mapLock';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import { FaLongArrowAltRight } from "react-icons/fa";
import Search from '../../components/search';


const center = [-6.9208, 106.9258]

function Home() {
    const [map, setMap] = useState(null)
    const maps = useSelector(state => state.maps.maps);
    const mapsState = useSelector(state => state.maps.mapsState);
    const dispatch = useDispatch();

    useEffect( () => {
        if (mapsState==='fill'){
          dispatch(getMaps());
        }
      }, [mapsState, dispatch]);
    
    console.log(maps)

    const getData = maps.map((e,key) => {
      return (
        <MarkerMap key={key} {...e}/>
      )
    })

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
                  <Search placeholder='Find Point' data={maps} status={false} width={false}/>
                </form>
                <Link to='/map' className='mx-auto mt-4 rounded-full bg-sky-800 w-44  px-0 py-1 text-md text-white font-semibold hover:bg-sky-900 transition duration-200 ease-in-out flex items-center justify-center'>
                    Get statistics 
                    <span className='ml-1'> <FaLongArrowAltRight fontSize='large'/> </span>
                </Link>
            </div>
            <div className="exampleMap col-span-3 w-full">
                <div className="flex items-center justify-center h-full md:px-16 pb-4 md:py-8">
                <MapContainer center={center} zoom={13} scrollWheelZoom={true} ref={setMap} zoomControl={false} className='relative'>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <ZoomControl position='bottomright'/>
                    {maps ? getData : console.log('Data not found')}
                    {map ? <MapLock map={map} /> : null}
                </MapContainer>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home