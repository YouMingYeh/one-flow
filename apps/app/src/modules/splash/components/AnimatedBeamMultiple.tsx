'use client';

import React, { forwardRef, useRef } from 'react';
import { cn, Icons, AnimatedBeam } from 'ui';
import Image from 'next/image';
import LianLian from './lian-lian.png'
import WorldFirst from './world-first.png'
import PingPong from './ping-pong.png'
import Payoneer from './payoneer.png'

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      className={cn(
        'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
        className,
      )}
      ref={ref}
    >
      {children}
    </div>
  );
});

Circle.displayName = 'Circle';

export function AnimatedBeamMultiple({ className }: { className?: string }) {
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
      className={cn(
        'bg-background relative w-full',
        className,
      )}
      ref={containerRef}
    >
      <div className='flex size-full max-w-lg flex-row items-stretch justify-between gap-10'>
        <div className='flex flex-col justify-center'>
          <Circle className='size-12' ref={div7Ref}>
            <Icons.User className='w-12 h-12'/>
          </Circle>
        </div>
        <div className='flex flex-col justify-center'>
          <Circle className='size-16' ref={div6Ref}>
            <Icons.logo className='w-16 h-16' />
          </Circle>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <Circle ref={div1Ref}>
            <Image alt='LianLian' className='rounded-full w-12 h-12' src={LianLian} />
          </Circle>
          <Circle ref={div2Ref}>
          <Image alt='WorldFirst' className='rounded-full w-12 h-12' src={WorldFirst} />
          </Circle>
          <Circle ref={div3Ref}>
          <Image alt='PingPong' className='rounded-full w-12 h-12' src={PingPong} />
          </Circle>
          <Circle ref={div4Ref}>
          <Image alt='Payoneer' className='rounded-full w-12 h-12' src={Payoneer} />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.VerticalEllipsis className='rounded-full w-12 h-12'/>
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        duration={7}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        duration={8}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        duration={5}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        duration={6}
        fromRef={div4Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        duration={3}
        fromRef={div5Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        duration={1}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}
