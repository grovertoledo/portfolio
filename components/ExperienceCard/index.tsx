import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const applaudoLogoLink = 'https://avatars.githubusercontent.com/u/7718624?s=200&v=4';

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2}}
        viewport={{ once: true }}
      >
        <Image
          alt="Applaudo Logo"
          src={applaudoLogoLink}
          width={128 || 200}
          height={128 || 200}
          className='rounded-full mx-auto object-cover'
        />
      </motion.div>

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Frontend Developer</h4>
        <p className='font-bold text-2xl mt-1'>Applaudo Studios</p>
        <div className='flex space-x-2 my-2'>
          <div>
            <Image
              alt="Applaudo Logo"
              src={applaudoLogoLink}
              width={40}
              height={40}
              className='rounded-full p-20'
            />
          </div>
          <div>
            <Image
              alt="Applaudo Logo"
              src={applaudoLogoLink}
              width={40}
              height={40}
              className='rounded-full'
            />
          </div>
          <div>
            <Image
              alt="Applaudo Logo"
              src={applaudoLogoLink}
              width={40}
              height={40}
              className='rounded-full'
            />
          </div>
        </div>
        <p className='uppercase py-5 text-gray-300'>Started - Ended</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A exercitationem?</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A exercitationem?</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A exercitationem?</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A exercitationem?</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A exercitationem?</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard