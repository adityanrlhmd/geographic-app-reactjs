import React, {Fragment, useState} from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import { deleteMap } from '../../../store/mapSlice';

function Table(props) {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(true)
  const navigate = useNavigate();
  const handleDelete = (_id) => {
    dispatch(deleteMap(_id))
    setModal(true)
    setTimeout(() => {
      window.location.reload();
    }, 1000)
    // navigate('/admin')
  }
  return (
    <Fragment>
      {/* <div className={`fixed overlay bg-gray-700 opacity-50 h-screen w-full z-40`}></div> */}
      <div className={` transition duration-700 ease-in-out fixed modal bg-white w-80 h-32 inset-1/2 -translate-x-1/2 -translate-y-1/2 z-40 rounded-2xl p-4 drop-shadow-lg ${modal ? 'scale-0' : ''}`}>
        <div className='bg-sky-900 text-white rounded-2xl -mt-10 shadow-lg px-5 py-2 flex justify-between'>
          <h1 className='text-xl font-semibold'>Delete</h1>
        </div>
        <h2 className='mt-5 mb-3'>Apakah anda yakin menghapus data ini?</h2>
        <div className="flex gap-4 w-full">
          <button onClick={() => handleDelete(props._id)} className='w-full bg-white text-red-700 rounded-2xl px-5 font-bold border border-red-700 hover:bg-red-700 hover:text-white transition'>Hapus</button>
          <button onClick={() => setModal(true)} className='w-full bg-primary hover:bg-cyan-900 text-white rounded-2xl px-5 font-bold border border-primary'>Tidak</button>
        </div>
      </div>
      <tbody>
        <tr className='hover:bg-gray-100 relative border-b-2'>
          <td className='py-4 px-2 text-center overflow-hidden'>{props.year}</td>
          <td className='py-4 px-2 text-center overflow-hidden'>{props.latde} <br/> {props.longtde}</td>
          <td className='py-4 px-2 text-left overflow-hidden'>
            <div className="flex flex-col items-baseline gap-4">
              <p>{props.street}</p>
              <p>{props.street2}</p>
              <p>{props.street3}</p>
            </div>
          </td>
          <td className='py-4 px-2 text-left overflow-hidden'>
            <div className="flex flex-col items-baseline gap-3">
              <p>{props.text}</p>
              <p>{props.text2}</p>
              <p>{props.text3}</p>
            </div>
          </td>
          <td className='py-4 px-2 text-left overflow-hidden'>
          <div className="flex flex-col items-baseline gap-16">
            <p>{props.date}</p>
            <p>{props.date2}</p>
            <p>{props.date3}</p>
          </div>
          </td>
          <td className='py-4 px-2 text-center overflow-hidden'>
          <div className="flex flex-col items-baseline gap-24">
            <p>{props.die}</p>
            <p>{props.die2}</p>
            <p>{props.die3}</p>
          </div>
          </td>
          <td className='py-4 px-2 text-center overflow-hidden'>
          <div className="flex flex-col items-baseline gap-24">
            <p>{props.seriousInj}</p>
            <p>{props.seriousInj2}</p>
            <p>{props.seriousInj3}</p>
          </div>
          </td>
          <td className='py-4 px-2 text-center overflow-hidden'>
          <div className="flex flex-col items-baseline gap-24">
            <p>{props.minorInj}</p>
            <p>{props.minorInj2}</p>
            <p>{props.minorInj3}</p>
          </div>
          </td>
          <td className='py-4 px-2 text-left overflow-hidden'>
          <div className="flex flex-col items-baseline gap-24">
            <p>Rp. {props.materialLoss}</p>
            <p>Rp. {props.materialLoss2}</p>
            <p>Rp. {props.materialLoss3}</p>
          </div>
          </td>
        <div className='absolute z-20 top-0 right-0 bg-sky-100 w-fit whitespace-nowrap p-2 rounded-lg'>
          <button onClick={() => navigate(`/admin/update/${props._id}`)}>
              <FaEdit/>
            </button>
            <button onClick={() => setModal(false)}>
              <FaTrash/>
            </button>
        </div>
        </tr>
      </tbody>
    </Fragment>
  )
}

export default Table