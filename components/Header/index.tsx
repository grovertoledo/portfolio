import Link from 'next/link';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import type { Social } from '../../typings';
import { MotionX } from '../StyledComponents/MotionElements';

type Props = {
  socials: Social[];
}

// const socialLinks = [
//   'https://www.linkedin.com/in/grovertoledo/',
//   'https://twitter.com/grover_toledo',
//   'https://www.instagram.com/grovitole/',
//   'https://github.com/grovertoledo',
// ]

export default function Header({ socials }: Props) {
  const RenderLinks = socials.map(({_id, url}) => (
    <SocialIcon url={url} fgColor='gray' bgColor='transparent' key={_id}/>
  ))
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <MotionX initialNegative={true} motionValue={500}>
        {RenderLinks}
      </MotionX>
      
      <Link href='#contact' >
        <div>
          <MotionX initialNegative={false} motionValue={500}>
              <SocialIcon network='email' fgColor='gray' bgColor='transparent'/>
              <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                Contact me
              </p>
          </MotionX>
        </div>
      </Link>
      
    </header>
  )
}