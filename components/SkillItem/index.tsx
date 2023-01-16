import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Skill } from '../../typings';
import { urlFor } from '../../sanity';


type Props = {
  skill: Skill,
  directionLeft?: boolean,
}

const SkillItem = ({skill, directionLeft}: Props) => {
  const skillImage = urlFor(skill?.image).url();
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1 , x: 0 }}
        className='rounded-full border border-gray-500'
      >
        <Image
          src={skillImage}
          alt={skill.title}
          width={96 || 128}
          height={96 || 128}
          className='rounded-full object-cover w-32 h-32 filter group-hover:grayscale transition duration-500 ease-in-out'
        />
      </motion.div>
      {/* <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div> */}
    </div>
  )
}

export default SkillItem