import React from 'react'

function Navbarmian() {
  return (
    <div className="w-full h-[60px] text-slate-800 fixed 3xl:px-0 md:px-20 select-none">
      <div className='w-full h-full container mx-auto navbarMaingridf'>

        {/* LeftSide Bar Or Logo Section */}
        <div className="w-full h-full flex items-center ">
          <div className='text-base font-semibold'>
            OpenFLY
          </div>
        </div>

        {/* Middle Side Bar Menu Section */}
        <div className="w-full h-full flex justify-center items-center">
          <div>Package</div>
          <div className='mx-10'>Taxi</div>
          <div>Tour</div>
          <div></div>
        </div>

        {/* Right Side Section Login or Sign Up Section */}
        <div className="w-full h-full flex justify-center items-center text-white text-sm">
          <div>
            <button className='bg-slate-800 rounded-full py-2 px-5'>
              Sing Up
            </button>
          </div>
          <div>
            <button className='bg-slate-800 rounded-full py-2 px-5 ml-5'>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbarmian
