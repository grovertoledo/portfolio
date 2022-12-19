import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
  experience: Experience,
}

const ExperienceCard = ({experience}: Props) => {
  const profilePhotoURL = urlFor(experience?.companyImage).url();

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
          src={profilePhotoURL}
          width={128 || 200}
          height={128 || 200}
          className='rounded-full mx-auto object-cover'
        />
      </motion.div>

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Frontend Developer</h4>
        <p className='font-bold text-2xl mt-1'>Applaudo Studios</p>
        <div className='flex space-x-2 my-2'>
          {experience?.technologies.map((technology) => (
            <div key={technology._id}>
              <Image
                alt="Applaudo Logo"
                src={urlFor(technology.image).url()}
                width={40}
                height={40}
                className='rounded-full p-20'
              />
          </div>
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience.dateEnded).toDateString()
          }
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg max-h-80 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard