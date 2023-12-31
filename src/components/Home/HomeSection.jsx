import React, { useState } from 'react'
import { LuHotel } from "react-icons/lu"
import { BiTaxi } from "react-icons/bi"
import TaxiSelection from './TaxiSelection'
import HotelSelection from './HotelSelection'

function HomeSection() {

    const [hotelortaxi, sethotelortaxi] = useState(1)

    return (
        <>
            <div className='w-full h-[100vh] select-none flex justify-center '>
                <div className='w-full h-[80vh] mainHomePage'>

                </div>
                <div className='w-full max-w-[1200px] absolute bottom-10'>
                    
                    <div className='w-full h-full shadow-xl px-3 sm:px-14  xl:px-0'>
                        
                        <div className='w-full h-[50px] flex'>
                            
                            <button className={hotelortaxi == 1 ? 'w-[120px] h-full bg-slate-800 active flex items-center justify-center cursor-pointer duration-300 rounded-tl-lg' : 'w-[120px] h-full text-white bg-slate-800 flex items-center justify-center cursor-pointer duration-200 rounded-tl-lg'} onClick={() =>{sethotelortaxi(1)}}>
                                <div className='text-lg'>
                                    <LuHotel />
                                </div>
                                <div className='text-lg ml-2'>
                                    Hotel
                                </div>
                            </button>
                            <button className={hotelortaxi == 2 ? 'w-[120px] h-full bg-slate-800 active flex items-center justify-center cursor-pointer rounded-tr-lg' : 'w-[120px] h-full text-white bg-slate-800 flex items-center justify-center cursor-pointer rounded-tr-lg'} onClick={() =>{sethotelortaxi(2)}}>
                                <div className='text-lg'>
                                    <BiTaxi />
                                </div>
                                <div className='text-lg ml-2'>
                                    Taxi
                                </div>
                            </button>
                        </div>
                        <div className='w-full bg-white sm:p-10 p-10 px-4 rounded-lg rounded-tl-none'>
                            {
                                hotelortaxi == 1 ? <HotelSelection /> : <TaxiSelection />
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSection
