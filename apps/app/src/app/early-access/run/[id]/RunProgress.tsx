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
  id: string;
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
              <p className='flex gap-2 text-left'>
                获取实时数据
                <Icons.Spinner className='animate-spin' />
              </p>
            ) : (
              <p className='flex gap-2 text-left'>
                获取实时数据{' '}
                {step > 1 && <Icons.Check className='text-green-500' />}
              </p>
            )}
          </AccordionTrigger>
          <AccordionContent>从资料库和 APIs 获取实时数据</AccordionContent>
        </AccordionItem>
        <AccordionItem value='step-2'>
          <AccordionTrigger className='text-xl'>
            {step === 2 ? (
              <p className='flex gap-2 text-left'>
                计算最适合您的收费
                <Icons.Spinner className='animate-spin' />
              </p>
            ) : (
              <p className='flex gap-2 text-left'>
                计算最适合您的收费{' '}
                {step > 2 && <Icons.Check className='text-green-500' />}
              </p>
            )}
          </AccordionTrigger>
          <AccordionContent>
            从所有解决方案中计算最适合您需求的收费
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='step-3'>
          <AccordionTrigger className='text-xl'>
            {step === 3 ? (
              <p className='flex gap-2 text-left'>
                计算最适合您的的收款天数
                <Icons.Spinner className='animate-spin' />
              </p>
            ) : (
              <p className='flex gap-2 text-left'>
                计算最适合您的的收款天数{' '}
                {step > 3 && <Icons.Check className='text-green-500' />}
              </p>
            )}
          </AccordionTrigger>
          <AccordionContent>
            从所有解决方案中找到最适合您需求的收款天数
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='step-4'>
          <AccordionTrigger className='text-xl'>
            {step === 4 ? (
              <p className='flex gap-2 text-left'>
                您的客户服务需求
                <Icons.Spinner className='animate-spin' />
              </p>
            ) : (
              <p className='flex gap-2 text-left'>
                您的客户服务需求{' '}
                {step > 4 && <Icons.Check className='text-green-500' />}
              </p>
            )}
          </AccordionTrigger>
          <AccordionContent>根据您的客户服务需求调整解决方案</AccordionContent>
        </AccordionItem>
        <AccordionItem value='step-5'>
          <AccordionTrigger className='text-xl'>
            {step === 5 ? (
              <p className='flex gap-2 text-left'>
                就快好了！立马找到最适合您的解决方案
                <Icons.Spinner className='animate-spin' />
              </p>
            ) : (
              <p className='flex gap-2 text-left'>
                就快好了！立马找到最适合您的解决方案
                {step > 5 && <Icons.Check className='text-green-500' />}
              </p>
            )}
          </AccordionTrigger>
          <AccordionContent>
            透过了解您的需求与喜好，我们帮您找到最适合的解决方案
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
        {averageMonthlyCashFlow &&
        withdrawFeeRange &&
        withdrawSpeedRange &&
        customerServices &&
        theMostConcerned ? (
          <div />
        ) : null}
      </div>
    </>
  );
}
