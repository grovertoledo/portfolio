import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const profilePhotoURL = 'https://media-exp1.licdn.com/dms/image/C4E03AQF51utoFfX2Lg/profile-displayphoto-shrink_200_200/0/1640107510763?e=1669852800&v=beta&t=OBcJvlRFYYXYN7KHVQpAHjdlE1OgrELBxwAiBsg17t4';


export const About = (props: Props) => {
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
        <p className='text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis perferendis omnis, odio adipisci laboriosam maxime quam. Libero nulla molestiae voluptatem exercitationem deserunt. Mollitia blanditiis ipsa, natus distinctio labore ea asperiores.
        Nobis ipsum fugiat cupiditate impedit pariatur provident at, cum animi autem molestiae dolorum molestias iusto aut doloremque, nostrum quis similique ratione voluptatibus quae. Minus, voluptates. Maiores consequatur maxime nesciunt earum!
        Impedit enim consectetur pariatur aspernatur nobis delectus eius sit nostrum cumque minus maiores dolorum, iusto tempore officia? Ipsum tempore non nihil tempora maiores quia dignissimos, nemo quas consequuntur similique odit.
        Veritatis corrupti quaerat aut, accusamus repellendus magni, eaque cum odio error nam ea. Tenetur iure tempore, nisi unde earum eligendi autem exercitationem illum, recusandae iste eum aut inventore debitis facilis!</p>
      </div>
    </motion.div>
  ) 
}
