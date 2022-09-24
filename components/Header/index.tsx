import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { MotionX } from '../StyledComponents/MotionElements';

type Props = {}

const socialLinks = [
  'https://www.linkedin.com/in/grovertoledo/',
  'https://twitter.com/grover_toledo',
  'https://www.instagram.com/grovitole/',
  'https://github.com/grovertoledo',
]

const RenderLinks = socialLinks.map((link, index) => (
  <SocialIcon url={link} fgColor='gray' bgColor='transparent' key={index}/>
))

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <MotionX initialNegative={true} motionValue={500}>
        {RenderLinks}
      </MotionX>
      <MotionX initialNegative={false} motionValue={500}>
        <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Contact me
        </p>
      </MotionX>
    </header>
  )
}