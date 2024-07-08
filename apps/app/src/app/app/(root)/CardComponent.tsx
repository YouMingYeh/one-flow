'use client';
import { useOnborda, type CardComponentProps } from 'onborda';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Icons,
} from 'ui';
// import confetti from 'canvas-confetti';

export const CustomCard = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  arrow,
}: CardComponentProps) => {
  const { closeOnborda } = useOnborda();
  function handleConfetti() {
    closeOnborda();
    // void confetti({
    //   particleCount: 100,
    //   spread: 70,
    //   origin: { y: 0.6 },
    // });
  }

  return (
    <Card>
      <Button
        className='absolute right-2 top-2'
        onClick={() => {
          closeOnborda();
        }}
        size='icon'
        variant='ghost'
      >
        <Icons.close size={16} />
      </Button>
      <CardHeader>
        <CardTitle>
          {step.icon} {step.title}
        </CardTitle>
        <CardDescription>
          {currentStep + 1} of {totalSteps}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{step.content}</p>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button
          onClick={currentStep === 0 ? closeOnborda : prevStep}
          variant='secondary'
        >
          {currentStep === 0 ? 'Close' : 'Back'}
        </Button>
        <Button
          onClick={currentStep + 1 === totalSteps ? handleConfetti : nextStep}
        >
          {currentStep + 1 === totalSteps ? '🎉 Finish!' : 'Next'}
        </Button>
      </CardFooter>
      <span className='text-background shadow'>{arrow}</span>
    </Card>
  );
};
