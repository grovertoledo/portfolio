import React from 'react';
import { motion } from 'framer-motion';
import type { PageInfo } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
  pageInfo: PageInfo,
}

export const About = ({pageInfo}: Props) => {  
  const profilePhotoURL = urlFor(pageInfo?.profilePicture).url();

  return (
    <motion.div
      className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2}}
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        src={profilePhotoURL}
        initial={{
          x:-200,
          opacity: 0,
        }}
        whileInView={{
          x: 0, 
          opacity: 1,
        }}
        transition={{ duration: 1.2}}
        viewport={{ once: true }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here&apos;s a <span className='underline decoration-[#F7AB04]/50'>little</span> background
        </h4>
        <p className='text-base'>
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  ) 
}
