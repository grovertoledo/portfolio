import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Card = () => {
  const [isHovered, setHovered] = useState(false);
console.log(isHovered);

  return (
    <div className='h-screen flex justify-center items-center z-0'>
      <div className='bg-[#252525] relative overflow-hidden rounded-[20px] border-2 border-[#FFF]/[.20] z-10 drop-shadow-[10px_10px_20px_rgba(0,0,0,0.24)]'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className='w-[586px] h-[586px] bg-[#FF4040]/[0.24] absolute rounded-full left-[-429px] top-[-410px] blur-[100px] z-20'/>
        <motion.div className='w-[607px] h-[607px] bg-[#893EFF] absolute rounded-full left-[-124px] top-[340px] blur-[100px] z-20'
          initial={ false }
          animate={{
            scale: isHovered ? 2 : 1,
            opacity: isHovered ? 1 : 0.24,
            top: isHovered ? -182 : 340,
          }}
        />
        <div className='w-[374px] h-[458px] flex flex-col relative z-40'>
          <div className='mt-8 ml-8 z-20'>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M45.1953 34.9999C45.1953 36.6568 46.5384 37.9999 48.1952 38C49.8521 38 51.1953 36.6569 51.1953 35.0001L51.1954 31.7001L51.1957 23.4501C51.1957 20.881 49.1125 18.8 46.5453 18.8H38.2953H34.9953C33.3385 18.8 31.9953 20.1431 31.9953 21.8C31.9953 23.4569 33.3385 24.8 34.9953 24.8H38.2953H45.1956L45.1954 31.6999L45.1953 34.9999ZM24.7953 35C24.7953 33.3431 23.4522 32 21.7953 32C20.1385 32 18.7953 33.3431 18.7953 35V38.3V46.55C18.7953 49.1181 20.8772 51.2 23.4453 51.2H31.6953H34.9953C36.6522 51.2 37.9953 49.8569 37.9953 48.2C37.9953 46.5431 36.6522 45.2 34.9953 45.2L31.6953 45.2H24.7953V38.3V35ZM2 35C2 16.7746 16.7746 2 35 2C53.2254 2 68 16.7746 68 35C68 53.2254 53.2254 68 35 68C16.7746 68 2 53.2254 2 35Z" fill="white"/>
            </svg>
          </div>
          <motion.div className='flex flex-col absolute bottom-[-32px] mx-8 z-20'
            initial={ false }
            animate={{
              bottom: isHovered ? 32 : -32,
            }}
          >
            <div className=''>
              <h2 className='text-[36px] font-semibold leading-[48px] mb-2'>Application Testing</h2>
              <p className='leading-[24px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quos sunt deserunt sapiente repellendus similique.
              </p>
            </div>
            <motion.button className='font-semibold py-[6px] border-2 border-[#FFF] rounded-[20px] mt-6'
              initial={ false }
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
            >
              Read the full story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Card;