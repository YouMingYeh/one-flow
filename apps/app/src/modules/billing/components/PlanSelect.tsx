'use client';
import {
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'ui';
import { useRouter } from 'next/navigation';

export default function PlanSelect({
  plan,
  months,
}: {
  plan: string;
  months: number;
}) {
  const router = useRouter();
  const onBillingChange = (value: string) => {
    router.push(`/app/billing?plan=${value}&months=${months}`);
  };
  const onMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    router.push(`/app/billing?plan=${plan}&months=${value}`);
  };

  return (
    <>
      <Label className='text-lg' htmlFor='plan'>
        Change Plan
      </Label>
      <Select onValueChange={onBillingChange}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder={plan} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='basic'>Basic</SelectItem>
          <SelectItem value='standard'>Standard</SelectItem>
          <SelectItem value='pro'>Pro</SelectItem>
        </SelectContent>
      </Select>
      <Label className='mt-4 text-lg' htmlFor='number-of-months'>
        Number of Months
      </Label>
      <Input
        className='w-[180px]'
        defaultValue={months}
        id='number-of-months'
        min='1'
        onChange={onMonthsChange}
        type='number'
      />
    </>
  );
}
