import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai";
import PopUpSection from './PopUpSection';

function HotelSelection() {
    const [popUpSection, setpopUpSection] = useState(false)
    return (
        <>
           {popUpSection === true ? <PopUpSection /> : null}
            <div className='h-full w-full  select-none'>
                <div className='flex text-[14px] mb-5'>
                    <div className='mr-5 flex items-center'>
                        5 <AiFillStar className='mx-1' /> Hotel
                    </div>
                    <div>
                        <p>2 Guest</p>
                    </div>
                    <div className='ml-3'>
                        <p>1 Room</p>
                    </div>
                </div>
                <div className='hotelSectionGrid'>
                    
                    <div className={popUpSection === false ? 'h-[80px] w-full border border-slate-300 flex flex-col justify-center pl-4 rounded-lg cursor-pointer' : 
                    'h-[80px] w-full border border-slate-300 flex flex-col justify-center pl-4 rounded-lg cursor-pointer bg-slate-200'} onClick={()=>{setpopUpSection(!popUpSection)}}>

                        <div className='text-sm uppercase font-light'>
                            City/Hotel/Resort
                        </div>
                        <div className='text-lg font-semibold'>
                            Cox's Bazar
                        </div>
                        <div className='text-[12px] font-light'>
                            Chitagong
                        </div>
                    </div>
                    <div className='h-[80px] w-full border border-slate-300 flex flex-col justify-center pl-4 rounded-lg' >
                        <div className='text-sm uppercase font-light'>
                            Check In
                        </div>
                        <div className='text-lg font-semibold'>
                            28 Jun 2023
                        </div>
                        <div className='text-[12px] font-light'>
                            Sun day
                        </div>
                    </div>
                    <div className='h-[80px] w-full border border-slate-300 flex flex-col justify-center pl-4 rounded-lg' >
                        <div className='text-sm uppercase font-light'>
                            Check Out
                        </div>
                        <div className='text-lg font-semibold'>
                            30 Jun 2023
                        </div>
                        <div className='text-[12px] font-light'>
                            Wed day
                        </div>
                    </div>
                    <div className='h-[80px] w-full border border-slate-300 flex flex-col justify-center pl-4 rounded-lg' >
                        <div className='text-sm uppercase font-light'>
                            ROOMS & GUESTS
                        </div>
                        <div className='text-lg font-semibold flex items-center'>
                            1 <p className='text-sm font-light ml-1'>Room</p> , 2 <p className='text-sm font-light ml-1'>Guest</p>
                        </div>
                        <div className='text-[12px] font-light'>
                            2 Adults 1 Child
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HotelSelection
