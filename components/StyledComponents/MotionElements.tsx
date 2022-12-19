import styled from 'styled-components';
import tw from 'twin.macro';
import media from "styled-media-query";
import { motion } from 'framer-motion';
import { ReactComponentElement, ReactElement } from 'react';

type Props = {
  children: Array<ReactElement> | ReactElement,
  initialNegative: boolean,
  motionValue: number,
}

const MotionX = ({children, initialNegative, motionValue}: Props) => {
  const initialPosition = initialNegative ? -motionValue : motionValue;
  return (
    <motion.div
      initial={{
        x: initialPosition,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration:  1.5,
      }}
      className='flex flex-row items-center cursor-pointer'
    >
      {children}
    </motion.div>
  )
}
export {
  MotionX,
};