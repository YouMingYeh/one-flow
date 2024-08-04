'use client';

import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AnimatedCircularProgressBar,
  AnimatedSubscribeButton,
  Icons,
} from 'ui';
import { useRouter } from 'next/navigation';
import type { Dictionary } from '../../../../dictionaries';
import {
  calculateTotalFee,
  calculateTotalSpeed,
  findBestSolution,
  getCustomerServices,
  getRealTimeData,
} from './utils';

export default function RunProgress({
  id,
  dictionary, 
  averageMonthlyCashFlow,
  withdrawFeeRange,
  withdrawSpeedRange,
  customerServices,
  theMostConcerned,
}: {
  id: string
  dictionary: Dictionary;
  averageMonthlyCashFlow: number;
  withdrawFeeRange: string;
  withdrawSpeedRange: string;
  customerServices: string;
  theMostConcerned: string;
}) {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState(0);
  const router = useRouter();

  const step1 = async () => {
    await getRealTimeData();
    setValue(10);
    setStep(2);
  };

  const step2 = async () => {
    await calculateTotalFee();
    setValue(30);
    setStep(3);
  };

  const step3 = async () => {
    await calculateTotalSpeed();
    setValue(50);
    setStep(4);
  };

  const step4 = async () => {
    await getCustomerServices();
    setValue(70);
    setStep(5);
  };

  const step5 = async () => {
    await findBestSolution();
    setValue(100);
    setStep(6);
  };

  useEffect(() => {
    switch (step) {
      case 1:
        void step1();
        break;
      case 2:
        void step2();
        break;
      case 3:
        void step3();
        break;
      case 4:
        void step4();
        break;
      case 5:
        void step5();
        break;
      default:
        break;
    }
  }, [step]);

  return (
    <>
      <div className='relative w-1/3 self-center'>
        <AnimatedCircularProgressBar
          gaugePrimaryColor='green'
          gaugeSecondaryColor='rgba(0, 0, 0, 0.1)'
          max={100}
          min={0}
          value={value}
        />
      </div>
      <Accordion collapsible type='single' value={`step-${step}`}>
        <AccordionItem value='step-1'>
          <AccordionTrigger className='text-xl'>
            {step === 1 ? (
              <p className='flex gap-2 font-bold'>
                Collecting Realtime Data
                <Icons.Spinner className='animate-spin' />
              </p>
            ) : (
              <p className='flex gap-2'>
                Collecting Realtime Data {step > 1 && <Icons.Check className='text-green-500' />}
              </p>
            )}
            
          </AccordionTrigger>
          <AccordionContent>
            Collecting Real Time Data from databases and APIs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='step-2'>
          <AccordionTrigger className='text-xl'>
            {step === 2 ? (
              <p className='flex gap-2 font-bold'>
                Calculating Total Fee
                <Icons.Spinner className='animate-spin' />
              </p>
            ) : (
              <p className='flex gap-2'>
                Calculating Total Fee {step > 2 && <Icons.Check className='text-green-500' />}
              </p>
            )}
          </AccordionTrigger>
          <AccordionContent>
            Calculating the total fee for each solution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='step-3'>
          <AccordionTrigger className='text-xl'>
            {step === 3 ? (
              <p className='flex gap-2 font-bold'>
                Calculating Total Speed
                <Icons.Spinner className='animate-spin' />
              </p>
            ) : (
              <p className='flex gap-2'>
                Calculating Total Speed {step > 3 && <Icons.Check className='text-green-500' />}
              </p>
            )}
          </AccordionTrigger>
          <AccordionContent>
            Calculating the total speed for each solution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='step-4'>
          <AccordionTrigger className='text-xl'>
            {step === 4 ? (
              <p className='flex gap-2 font-bold'>
                Getting Customer Services
                <Icons.Spinner className='animate-spin' />
              </p>
            ) : (
              <p className='flex gap-2'>
                Getting Customer Services {step > 4 && <Icons.Check className='text-green-500' />}
              </p>
            )}
          </AccordionTrigger>
          <AccordionContent>
            Getting the customer services for each solution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='step-5'>
          <AccordionTrigger className='text-xl'>
            {step === 5 ? (
              <p className='flex gap-2 font-bold'>
                Finding Best Solution
                <Icons.Spinner className='animate-spin' />
              </p>
            ) : (
              <p className='flex gap-2'>
                Finding Best Solution {step > 5 && <Icons.Check className='text-green-500' />}
              </p>
            )}
          </AccordionTrigger>
          <AccordionContent>
            Finding the best solution based on the most concerned factor.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className='self-center'>
      {step === 6 && (
        <AnimatedSubscribeButton
          buttonColor='#000000'
          buttonTextColor='#ffffff'
          changeText={
            <span className='group inline-flex items-center justify-center'>
              <Icons.Check className='mr-2' />
              {dictionary.earlyAccess.run.letsGo}
              <Icons.Spinner className='ml-2 animate-spin' />
            </span>
          }
          delay={300}
          initialText={
            <span className='group inline-flex items-center justify-center'>
              <Icons.Rocket className='mr-2' />
              {dictionary.earlyAccess.run.checkResults}
            </span>
          }
          onClick={() => {
            router.push(`/early-access/results/${id}`);
          }}
          subscribeStatus={false}
        />
      )}
      </div>
      <div>
        {
          averageMonthlyCashFlow && withdrawFeeRange && withdrawSpeedRange && customerServices && theMostConcerned ? <div /> : null
        }
      </div>
    </>
  );
}
