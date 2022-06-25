import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router'

function Table(props) {
  const navigate = useNavigate();
  return (
    <tbody>
      <tr className='hover:bg-gray-100 relative border-b-2'>
        <td className='py-4 px-2 text-center overflow-hidden'>{props + 1}</td>
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
        <button onClick={() => navigate('/admin/update')}>
            <FaEdit/>
          </button>
          <button>
            <FaTrash/>
          </button>
      </div>
      </tr>
    </tbody>
  )
}

export default Table