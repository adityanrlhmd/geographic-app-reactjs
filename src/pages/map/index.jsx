import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import { useDispatch, useSelector} from 'react-redux';
import { getMaps } from '../../store/mapSlice'
import MarkerMap from '../../components/markerMap'
import MapLock from '../../components/mapLock';
import MenuMap from '../../components/menuMap';

const center = [-6.9208, 106.9258]

function Map() {
    const [map, setMap] = useState(null)
    const maps = useSelector(state => state.maps.maps);
    const mapsState = useSelector(state => state.maps.mapsState);
    const dispatch = useDispatch();

    // const year = useSelector(state => state.maps.year);
    // const yearState = useSelector(state => state.maps.yearState);
    // const param = useParams();
    // const dispatchYear = useDispatch();

    useEffect( () => {
        if (mapsState==='fill'){
          dispatch(getMaps());
        }
      }, [mapsState, dispatch]);

    // useEffect( () => {
    //     if (yearState==='fill'){
    //       dispatchYear(getYear(param.year));
    //     }
    //   }, [yearState, dispatchYear,param]);

    // console.log(year)

    console.log(maps)

    const getData = maps.map((e,key) => {
      return (
        <MarkerMap key={key} {...e}/>
      )
    })

  return (
    <div className="w-screen h-screen">
      <MapContainer center={center} zoom={13} scrollWheelZoom={true} ref={setMap} zoomControl={false} className='relative'>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position='bottomright'/>
        {maps ? getData : console.log('Data not found')}
        {map ? <MapLock map={map} /> : null}
        <MenuMap data={maps}/>
      </MapContainer>
    </div>
  )
}

export default Map