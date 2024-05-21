import React from 'react'
import Number from '../../images/Number.jpeg'

const Whatsapp = () => {
  return (
    <div>
          <div className="w-full  my- bg-[#2e3093]  justify-center flex  flex-col    py-5 md:flex-row   ">
        <div className="  mx-auto   md:mx-0 lg:mx-0 ">
          <img
            src={Number}
            alt=""
            className='h-[100px]'
          />
        </div>

        <div className="pt-2 px-[2rem] ">
          <button class=" w-full  border-2 border-white hover:bg-white hover:text-[#2e3093] md:px-8 text-white rounded-full  my-6  py-3  px-4  font-bold ">
            CALL OR WHATSAPP
          </button>
        </div>
      </div>
    </div>
  )
}

export default Whatsapp