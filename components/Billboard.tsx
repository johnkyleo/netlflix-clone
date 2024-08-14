import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";



const Billboard = () => {
  return (
    <div className='relative h[56.25vw]'>
        <video className='w-full object-cover brightness-[60%]' autoPlay muted loop>
            <source src='/videos/bunny.mp4'/>
        </video>
        <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
            <p className='text-white text-1xl md:text-5xl h-full w-50% lg:text-6xl font-bold drop-shadow-xl'>
            Big Buck Bunny
            </p>
            <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[70%] md:w-[60%] lg:w-[50%] drop-shadow-xl'>
            A day in the life of Big Buck Bunny, during which time he meets three bullying rodents: the leader, Frank the flying squirrel, and his sidekicks Rinky the red squirrel and Gimera the chinchilla.
            </p>
            <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>

            <button className='bg-white text-black rounded-md py-1 md:p-2 px-2 md:px-4 w-auto text-xl lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition'>
                <FaPlay className='text-black mr-1'/>Play
                </button>
                <button className='bg-white text-white bg-opacity-30 rounded-md py-1 md:p-2 px-2 md:px-4 w-auto text-xl lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition'>
                <AiOutlineInfoCircle className='text-white mr-1'/>More Info
                </button>
            </div>

        </div>
        
    </div>
  )
}

export default Billboard