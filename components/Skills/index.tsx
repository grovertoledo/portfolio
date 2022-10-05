import React from 'react';
import { motion } from 'framer-motion';
import SkillItem from '../SkillItem';

type Props = {}
const skillsItems = [
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    id: 0,
    name: 'Javascript',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },

];

const renderSkills = skillsItems.map(({id, name, img}) => 
  <SkillItem key={id} title={name} img={img} />
);

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity:1 }}
      transition={{ duration: 2.5}}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current proficiency
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        {renderSkills}
      </div>
    </motion.div>
  )
}

export default Skills