import React from 'react';
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import BackgroundCircles from '../BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import type { PageInfo } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
  pageInfo: PageInfo,
}

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, the name is ${pageInfo?.name}`,
      'Guy-who-loves-coffee.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  const profilePhotoURL = urlFor(pageInfo?.heroImage).url();

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
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          {pageInfo?.role}
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}