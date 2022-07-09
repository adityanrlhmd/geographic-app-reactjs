import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import NavbarAdmin from '../../components/admin/navbar'
import SidenavAdmin from '../../components/admin/sidenav'
import Table from '../../components/admin/table'
import { getMaps } from '../../store/mapSlice';

function Admin() {
  
  const maps = useSelector(state => state.maps.maps);
  const mapsState = useSelector(state => state.maps.mapsState);
  const dispatch = useDispatch();

  useEffect( () => {
      if (mapsState==='fill'){
        dispatch(getMaps());
      }
    }, [mapsState, dispatch]);
  
    const [showDelete, setShowDelete] = useState(true);
    const handleModal = () => {
      setShowDelete(current => !current);
    }
    const getData = maps.map((e,key) => {
      return (
        <Table key={key} {...e}/>
      )
    })

    const navigate = useNavigate();

  return (
    <div className=' bg-sky-100 relative overflow-hidden'>
      <SidenavAdmin/>
      <main className='pl-64'>
      {/* <Search placeholder='Find Point' data={maps} status={false} width={false}/> */}
        <NavbarAdmin placeholder='Find Data' data={maps}/>
        <div className='content px-6 py-10 h-full'>
            <div className='bg-white rounded-2xl p-4 shadow-lg'>
              <div className='bg-sky-900 text-white rounded-2xl -mt-10 shadow-lg px-5 py-4 flex justify-between'>
                <h1 className='text-2xl font-semibold'>Dashboard</h1>
                <button onClick={() => navigate('/admin/create')} className='bg-white text-primary rounded-2xl px-5 font-bold border border-primary hover:bg-gray-200'>Tambah Data</button>
              </div>
              <table class=" table-fixed w-full mt-6 px-12">
                <thead>
                  <tr>
                    <th className='p-2 w-[6%] text-center overflow-hidden border-b border-sky-500'>Tahun</th>
                    <th className='p-2 w-[10%] text-center overflow-hidden border-b border-sky-500'>Koordinat</th>
                    <th className='p-2 w-[22%] text-left overflow-hidden border-b border-sky-500'>Lokasi</th>
                    <th className='p-2 w-[23%] text-left overflow-hidden border-b border-sky-500'>Kejadian</th>
                    <th className='p-2 w-[13%] text-left overflow-hidden border-b border-sky-500'>Tanggal</th>
                    <th className='p-2 w-[4%] text-left overflow-hidden border-b border-sky-500'>MD</th>
                    <th className='p-2 w-[4%] text-left overflow-hidden border-b border-sky-500'>LB</th>
                    <th className='p-2 w-[4%] text-left overflow-hidden border-b border-sky-500'>LK</th>
                    <th className='p-2 w-[12%] text-left overflow-hidden border-b border-sky-500'>Material</th>
                  </tr>
                </thead>
                {maps ? getData : console.log('Data not found')}
              </table>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Admin