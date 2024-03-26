import React from 'react'
import Number from '../../images/Number.jpg'

const Whatsapp = () => {
  return (
    <div>
          <div className="w-full  my- bg-[#2e3093]  justify-center flex  flex-col  md:flex-row   ">
        <div className="">
          <img
            src={Number}
            alt=""
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