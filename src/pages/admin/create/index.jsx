import React, { useState } from 'react'
import NavbarAdmin from '../../../components/admin/navbar'
import { useDispatch } from "react-redux";
import {IoMdArrowRoundBack} from 'react-icons/io'
import { useNavigate } from 'react-router'
import { createMap } from '../../../store/mapSlice';

function Create() {
    const dispatch = useDispatch();
    const [create, setCreate] = useState({
        latde: '',
        longtde: '',
        year: '',
        street: '',
        street2: '',
        street3: '',
        text: '',
        text2: '',
        text3: '',
        date: '',
        date2: '',
        date3: '',
        die: '',
        die2: '',
        die3: '',
        seriousInj: '',
        seriousInj2: '',
        seriousInj3: '',
        minorInj: '',
        minorInj2: '',
        minorInj3: '',
        materialLoss: '',
        materialLoss2: '',
        materialLoss3: ''
    });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        // dispatch
        dispatch(createMap(create))
        setCreate({
            latde: '',
            longtde: '',
            year: '',
            street: '',
            street2: '',
            street3: '',
            text: '',
            text2: '',
            text3: '',
            date: '',
            date2: '',
            date3: '',
            die: '',
            die2: '',
            die3: '',
            seriousInj: '',
            seriousInj2: '',
            seriousInj3: '',
            minorInj: '',
            minorInj2: '',
            minorInj3: '',
            materialLoss: '',
            materialLoss2: '',
            materialLoss3: ''
        });
        navigate('/admin')
      };

    const navigate = useNavigate();
  return (
    <div className=' bg-sky-100 h-full md:h-screen'>
        <NavbarAdmin placeholder='Find Data'/>
        <button onClick={() => navigate('/admin')} className="absolute left-12 text-5xl" >
            <IoMdArrowRoundBack/>
        </button>
        <div className='content mx-auto max-w-5xl px-6 py-10'>
            <div className='bg-white rounded-2xl p-4 shadow-lg'>
                <div className='bg-sky-900 text-white rounded-2xl -mt-10 shadow-lg px-5 py-4 flex justify-between'>
                    <h1 className='text-2xl font-semibold'>Tambah Data Black Spot</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 pt-5 gap-6">
                        <div className="start ">
                            <div className='koordinat mb-3'>
                                <label className='font-bold'>Koordinat</label>
                                <div className="flex w-full">
                                    <input value={create.latde} onChange={(e) => setCreate({ ...create, latde: e.target.value })} type='text' className='w-full mr-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Isi data latitude'/>
                                    <input value={create.longtde} onChange={(e) => setCreate({ ...create, longtde: e.target.value })} type='text' className='w-full ml-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Isi data longitude'/>
                                </div>
                            </div>
                            <div className="street mb-3">
                                <label className='font-bold'>Nama Jalan</label>
                                <div className="w-full flex">
                                    <textarea value={create.street} onChange={(e) => setCreate({ ...create, street: e.target.value })} className='h-24 resize-none w-full px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Isi nama jalan kejadian pertama'></textarea>
                                    <textarea value={create.street2} onChange={(e) => setCreate({ ...create, street2: e.target.value })} className='h-24 resize-none w-full mx-3 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Isi nama jalan kejadian kedua'></textarea>
                                    <textarea value={create.street3} onChange={(e) => setCreate({ ...create, street3: e.target.value })} className='h-24 resize-none w-full px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Isi nama jalan kejadian ketiga'></textarea>
                                </div>
                            </div>
                            <div className="type mb-3">
                                <label className='font-bold'>Tipe Kejadian</label>
                                <div className="w-full flex">
                                    <textarea value={create.text} onChange={(e) => setCreate({ ...create, text: e.target.value })} className='h-24 resize-none w-full px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Isi type kejadian pertama'></textarea>
                                    <textarea value={create.text2} onChange={(e) => setCreate({ ...create, text2: e.target.value })} className='h-24 resize-none w-full mx-3 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Isi type kejadian kedua'></textarea>
                                    <textarea value={create.text3} onChange={(e) => setCreate({ ...create, text3: e.target.value })} className='h-24 resize-none w-full px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Isi type kejadian ketiga'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="end">
                            <div className="date mb-3">
                                <label className='font-bold'>Tanggal</label>
                                <div className='w-full flex'>
                                    <input value={create.date} onChange={(e) => setCreate({ ...create, date: e.target.value })} type='date' className='w-full px-3 py-1 focus:outline-none border border-primary rounded-lg'/>
                                    <input value={create.date2} onChange={(e) => setCreate({ ...create, date2: e.target.value })} type='date' className='w-full mx-2 px-3 py-1 focus:outline-none border border-primary rounded-lg'/>
                                    <input value={create.date3} onChange={(e) => setCreate({ ...create, date3: e.target.value })} type='date' className='w-full px-3 py-1 focus:outline-none border border-primary rounded-lg'/>
                                </div>
                            </div>
                            <div className="wrap-korban mb-3">
                                <h3  className='font-bold'>Korban</h3>
                                <div className="korban flex gap-3">
                                    <div className="first">
                                        <label>Kejadian Pertama</label>
                                        <div className='w-full'>
                                            <input value={create.die} onChange={(e) => setCreate({ ...create, die: e.target.value })} type='number' className='w-full mb-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Meninggal dunia'/>
                                            <input value={create.seriousInj} onChange={(e) => setCreate({ ...create, seriousInj: e.target.value })} type='number' className='w-full mb-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Luka berat'/>
                                            <input value={create.minorInj} onChange={(e) => setCreate({ ...create, minorInj: e.target.value })} type='number' className='w-full px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Luka ringan'/>
                                        </div>
                                    </div>
                                    <div className="second">
                                        <label>Kejadian Kedua</label>
                                        <div className='w-full'>
                                            <input value={create.die2} onChange={(e) => setCreate({ ...create, die2: e.target.value })} type='number' className='w-full mb-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Meninggal dunia'/>
                                            <input value={create.seriousInj2} onChange={(e) => setCreate({ ...create, seriousInj2: e.target.value })} type='number' className='w-full mb-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Luka berat'/>
                                            <input value={create.minorInj2} onChange={(e) => setCreate({ ...create, minorInj2: e.target.value })} type='number' className='w-full px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Luka ringan'/>
                                        </div>
                                    </div>
                                    <div className="third">
                                        <label>Kejadian Ketiga</label>
                                        <div className='w-full'>
                                            <input value={create.die3} onChange={(e) => setCreate({ ...create, die3: e.target.value })} type='number' className='w-full mb-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Meninggal dunia'/>
                                            <input value={create.seriousInj3} onChange={(e) => setCreate({ ...create, seriousInj3: e.target.value })} type='number' className='w-full mb-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Luka berat'/>
                                            <input value={create.minorInj3} onChange={(e) => setCreate({ ...create, minorInj3: e.target.value })} type='number' className='w-full px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Luka ringan'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="loss mb-3">
                                <h3>Kerugian Materi</h3>
                                <div className="flex gap-3">
                                    <input value={create.materialLoss} onChange={(e) => setCreate({ ...create, materialLoss: e.target.value })} type='number' className='w-full px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Kejadian pertama'/>
                                    <input value={create.materialLoss2} onChange={(e) => setCreate({ ...create, materialLoss2: e.target.value })} type='number' className='w-full px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Kejadian kedua'/>
                                    <input value={create.materialLoss3} onChange={(e) => setCreate({ ...create, materialLoss3: e.target.value })} type='number' className='w-full px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Kejadian ketiga'/>
                                </div>
                            </div>
                            <div className="year mb-2">
                                <label className='font-bold mr-2'>Tahun</label>
                                <select value={create.year} onChange={(e) => setCreate({ ...create, year: e.target.value })} className='px-3 py-1 focus:outline-none border border-primary rounded-lg'>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                </select >
                            </div>
                            <div className="btn flex justify-end">
                                <button className='rounded-md bg-primary text-white hover:bg-blue-900 py-2 px-5 mr-3'>Submit</button>
                                <button className='rounded-md bg-white border border-red-600  hover:bg-red-700 hover:text-white py-2 px-5'>Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Create