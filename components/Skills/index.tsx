import React from 'react';
import { motion } from 'framer-motion';
import SkillItem from '../SkillItem';
import type { Skill } from '../../typings';

type Props = {
  skills: Skill[]
}

const Skills = ({skills}: Props) => {
  const renderFirstHalf = skills.slice(0, skills.length/2).map(skill => 
    <SkillItem key={skill._id} skill={skill} />
  );
  const renderSecondHalf = skills.slice(skills.length/2, skills.length).map(skill => 
    <SkillItem key={skill._id} skill={skill} directionLeft/>
  );

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
        {renderFirstHalf}
        {renderSecondHalf}
      </div>
    </motion.div>
  )
}

export default Skills