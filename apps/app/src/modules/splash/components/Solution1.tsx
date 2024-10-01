'use client';

import React, { forwardRef, useRef } from 'react';
import { cn, Icons, AnimatedBeam } from 'ui';
import Image from 'next/image';
import LianLian from './lian-lian.png';
import WorldFirst from './world-first.png';
import PingPong from './ping-pong.png';
import Payoneer from './payoneer.png';

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      className={cn(
        'bg-background z-10 flex size-12 items-center justify-center rounded-full border-2 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
        className,
      )}
      ref={ref}
    >
      {children}
    </div>
  );
});

Circle.displayName = 'Circle';

export function Solution1({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn('relative h-64 w-full md:h-96', className)}
      ref={containerRef}
    >
      <div className='relative m-auto flex size-full h-full max-w-lg flex-row items-stretch justify-between gap-10'>
        <Circle
          className='absolute bottom-24 left-1/4 z-20 aspect-square size-16 border-none bg-transparent shadow-none'
          ref={div7Ref}
        >
          <Icons.logo className='bg-background h-16 w-16' />
        </Circle>
        <Circle
          className='absolute right-8 top-4 z-20 aspect-square'
          ref={div6Ref}
        >
          <Icons.Sparkles className='h-12 w-12' />
        </Circle>
        <Circle className='absolute bottom-32 left-0' ref={div1Ref}>
          <Image
            alt='LianLian'
            className='h-8 w-8 rounded-full'
            src={LianLian}
          />
        </Circle>
        <Circle className='absolute bottom-0 left-4' ref={div2Ref}>
          <Image
            alt='WorldFirst'
            className='h-8 w-8 rounded-full'
            src={WorldFirst}
          />
        </Circle>
        <Circle className='absolute bottom-0 left-1/3' ref={div3Ref}>
          <Image
            alt='PingPong'
            className='h-8 w-8 rounded-full'
            src={PingPong}
          />
        </Circle>
        <Circle className='absolute bottom-1/4 left-1/2' ref={div4Ref}>
          <Image
            alt='Payoneer'
            className='h-8 w-8 rounded-full'
            src={Payoneer}
          />
        </Circle>
        <Circle className='absolute bottom-2/3 left-1/4' ref={div5Ref}>
          <Icons.VerticalEllipsis className='h-8 w-8 rounded-full' />
        </Circle>
      </div>

      {/* AnimatedBeams */}

      <AnimatedBeam
        className='z-10'
        containerRef={containerRef}
        duration={6}
        fromRef={div6Ref}
        toRef={div7Ref}
      />

      {/* Label */}
      {/* <div className='absolute top-1/4 right-1/3 z-20 flex gap-1 font-bold text-xl'>
      <Icons.logo /> OneFlow
      </div> */}
    </div>
  );
}
