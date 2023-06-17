import React from 'react'

function TaxiSelection() {
    return (
        <>
            <div className='h-full w-full border'>
                <div className='flex text-[14px] mb-5'>
                    <div className='mr-5'>
                        Place Tour
                    </div>
                    <div>
                        2 Passenger
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-3'>
                    <div className='h-[70px] w-full border border-slate-800'>
                        Form
                    </div>
                    <div className='h-[70px] w-full border border-slate-800'>
                        To
                    </div>
                    <div className='h-[70px] w-full border border-slate-800'>
                        Date
                    </div>
                    <div className='h-[70px] w-full border border-slate-800'>
                        Time
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaxiSelection
