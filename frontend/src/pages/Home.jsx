import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';



const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef=useRef(null)
  const vehicleFoundRef=useRef(null)
  const waitingForDriverRef=useRef(null)

  const panelRefs = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault()
  }
  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRefs.current, {
        height: '70%'
      })
    }
    else {
      gsap.to(panelRefs.current, {
        height: '0%'
      })
    }
  }, [panelOpen])
  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        translateY: '0%'
      })
    }
    else {
      gsap.to(vehiclePanelRef.current, {
        translateY: '100%'
      })
    }
  }, [vehiclePanel])
  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        translateY: '0%'
      })
    }
    else {
      gsap.to(confirmRidePanelRef.current, {
        translateY: '100%'
      })
    }
  }, [confirmRidePanel])
  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        translateY: '0%'
      })
    }
    else {
      gsap.to(vehicleFoundRef.current, {
        translateY: '100%'
      })
    }
  }, [vehicleFound])
  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        translateY: '0%'
      })
    }
    else {
      gsap.to(waitingForDriverRef.current, {
        translateY: '100%'
      })
    }
  }, [waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-20 absolute left-5 top-5' src='https://logospng.org/download/uber/logo-uber-4096.png'></img>
      <div className='h-screen w-screen'>
        <img className='h-full w-full  object-cover' src="https://media.gettyimages.com/id/1268054405/vector/route-planning-city-driving-road-network-destination-map.jpg?s=612x612&w=0&k=20&c=fFAXAL-udAnyNMc03hDYeVl3fg7LJyGu3XG-6xPi58o=" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full '>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} className='absolute top-0 left-0'><i class="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-2xl font-semibold right-2'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute h-20 w-1  left-5 bg-black rounded-full'></div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)

              }}
              className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full' type="text" placeholder='Add pick up location' />
            <input
              onClick={() => {
                setPanelOpen(true)
              }}

              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}

              className='bg-[#eee] px-8 py-2 text-lg rounded-lg ' type="text" placeholder='Enter your Destination' /></form>
        </div>

        <div ref={panelRefs} className='h-0  bg-white  '>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full   bg-white px-3 py-10'>
      <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
       </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full   bg-white px-3 py-10'>
      <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/ >
       </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full   bg-white px-3 py-10'>
      <LookingForDriver setVehicleFound={setVehicleFound}/>
       </div>
      <div red={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-10'>
      <WaitingForDriver waitingForDriver={waitingForDriver} />
       </div>

    </div>
  )
}

export default Home
