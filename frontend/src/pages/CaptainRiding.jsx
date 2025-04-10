import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import confirmRidePopUpPanel from '../components/ConfirmRidePopUp'

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)
  useGSAP(function () {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)'

      })
    }3
  }, [confirmRidePopUpPanel])

  return (
    <div className='h-screen w-screen flex flex-col  bg-[#F5F5F5]'>
      <div className='fixed p-3 top-0 flex items-center justify-between w-screen'> <img className='w-16' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
        <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium  ri-logout-box-r-line"></i></Link>

      </div>
      <div className='h-4/5 flex justify-center items-center'>
        <img className='h-full w-full object-cover' src="https://preview.redd.it/prayagraj-kumbh-mela-2025-v0-vk0hz9yhjbxd1.png?width=1342&format=png&auto=webp&s=d91ab21f5817b4a556356917166571f5ca6b8f0f" alt="" />

      </div>

      <div className='h-1/5 p-6 flex items-center relative justify-between bg-yellow-400'
      onClick={()=>{
        setFinishRidePanel(true)
      }}>

        <h5 className='p-3 text-center  top-0  absolute w-[95%]' onClick={() => {

        }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>

        <h4 className='text-lg font-semibold '>4 KM away</h4>
        <button className='  text-xl font-semibold bg-green-600 text-white rounded-lg p-1 justify-between items-center right-10'>Complete Ride</button>
      </div>
      <div ref={finishRidePanelRef} className='fixed w-full h-screen z-10 bottom-0  translate-y-full bg-white px-3 py-10'>
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>


    </div>
  )
}

export default CaptainRiding