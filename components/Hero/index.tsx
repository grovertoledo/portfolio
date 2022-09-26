import React from 'react';
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import BackgroundCircles from '../BackgroundCircles';
import Image from 'next/image';

type Props = {}
const words = [
  'Hi, the name is Grover Toledo',
  'Guy-who-loves-coffee.tsx',
  '<ButLovesToCodeMore />',
];
const profilePhotoURL = 'https://media-exp1.licdn.com/dms/image/C4E03AQF51utoFfX2Lg/profile-displayphoto-shrink_200_200/0/1640107510763?e=1669852800&v=beta&t=OBcJvlRFYYXYN7KHVQpAHjdlE1OgrELBxwAiBsg17t4';

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        alt="Profile photo"
        src={profilePhotoURL}
        width={128}
        height={128}
        className='relative rounded-full mx-auto object-cover'
      />
      <div>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
      </div>
    </div>
  )
}