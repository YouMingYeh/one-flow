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
      className={cn('bg-background relative w-full h-96', className)}
      ref={containerRef}
    >
      <div className='relative flex size-full h-full max-w-lg flex-row items-stretch justify-between gap-10'>
        <Circle className='absolute aspect-square left-1/4 bottom-24 z-20' ref={div7Ref}>
          <Icons.User className='h-12 w-12' />
        </Circle>
        <Circle className='absolute aspect-square right-8 top-4 z-20' ref={div6Ref}>
          <Icons.Sparkles className='h-12 w-12' />
        </Circle>
        <Circle className='absolute left-0 bottom-32' ref={div1Ref}>
          <Image
            alt='LianLian'
            className='h-8 w-8 rounded-full'
            src={LianLian}
          />
        </Circle>
        <Circle className='absolute left-4 bottom-0' ref={div2Ref}>
          <Image
            alt='WorldFirst'
            className='h-8 w-8 rounded-full'
            src={WorldFirst}
          />
        </Circle>
        <Circle className='absolute left-1/3 bottom-4' ref={div3Ref}>
          <Image
            alt='PingPong'
            className='h-8 w-8 rounded-full'
            src={PingPong}
          />
        </Circle>
        <Circle className='absolute left-1/2 bottom-1/4' ref={div4Ref}>
          <Image
            alt='Payoneer'
            className='h-8 w-8 rounded-full'
            src={Payoneer}
          />
        </Circle>
        <Circle className='absolute left-1/4 bottom-1/2' ref={div5Ref}>
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
      <div className='absolute top-1/4 right-1/3 z-20 flex gap-1 font-bold text-xl'>
      <Icons.logo /> OneFlow
      </div>
    </div>
  );
}
