'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState, type FC } from 'react';
import { z } from 'zod';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Icons,
  Label,
  Progress,
  Separator,
  Slider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useToast,
} from 'ui';
import { v4 as uuidv4 } from 'uuid';
import { defaultLanguage, getDictionary } from '../i18n';
import { AppForm } from '../../components/form/AppForm';
import { FormInputField } from '../../components/form/FormInputField';
import { FormSelect } from '../../components/form/FormSelect';
import createSupabaseClientClient from '../../../lib/supabase/client';

export const EarlyAccessForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [businessCoverage, setBusinessCoverage] = useState<string[]>([]);
  const [currency, setCurrency] = useState<string[]>([]);
  const [customerServices, setCustomerServices] = useState<string[]>([]);
  const [withdrawFeeRange, setWithdrawFeeRange] = useState<[number, number]>([
    0.5, 1.5,
  ]);
  const [withdrawSpeedRange, setWithdrawSpeedRange] = useState<
    [number, number]
  >([3, 7]);
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') ?? defaultLanguage;
  const dictionary = getDictionary(lang);
  const { toast } = useToast();
  const router = useRouter();
  const earlyAccessFormSchema = z.object({
    name: z.string().optional().nullable(),
    email: z
      .string({
        invalid_type_error: dictionary.earlyAccess.form.email.required_error,
        required_error: dictionary.earlyAccess.form.email.required_error,
      })
      .email({
        message: dictionary.earlyAccess.form.email.invalid_email_error,
      }),
    country: z.string().optional().nullable(),
    company: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    businessType: z.string().optional().nullable(),
    averageMonthlyCashFlow: z.number({
      invalid_type_error:
        dictionary.earlyAccess.form.averageMonthlyCashFlow.required_error,
      required_error:
        dictionary.earlyAccess.form.averageMonthlyCashFlow.required_error,
    }),
    theMostConcerned: z.string().optional().nullable(),
    currentGateway: z.string().optional().nullable(),
    currentRate: z.string().optional().nullable(),
  });

  type EarlyAccessFormValues = z.infer<typeof earlyAccessFormSchema>;

  const onSubmit = async (data: EarlyAccessFormValues) => {
    setIsLoading(true);
    const supabase = createSupabaseClientClient();

    const earlyAccessId = uuidv4();
    const { error } = await supabase.from('early_access').insert([
      {
        id: earlyAccessId,
        name: data.name,
        email: data.email,
        country: data.country,
        company: data.company,
        phone: data.phone,
        business_type: data.businessType,
        average_monthly_cash_flow: data.averageMonthlyCashFlow,
        withdraw_fee_range: withdrawFeeRange.join(','),
        withdraw_speed_range: withdrawSpeedRange.join(','),
        customer_services: customerServices.join(','),
        the_most_concerned: data.theMostConcerned,
        business_coverage: businessCoverage.join(','),
        currency: currency.join(','),
        current_gateway: data.currentGateway,
        current_rate: data.currentRate,
      },
    ]);
    if (error) {
      toast({
        title: dictionary.earlyAccess.form.submit_error,
        description: JSON.stringify(error.message),
      });
      setIsLoading(false);
      return;
    }
    toast({
      title: dictionary.earlyAccess.form.submit_success,
    });
    setTimeout(() => {
      router.push(`/early-access/run/${earlyAccessId}`);
    }, 1000);

    setIsLoading(false);
  };
  const handleNextStep = () => {
    setStep(step + 1);
    // scroll for 500px
    setTimeout(() => {
      window.scrollTo({
        top: window.scrollY + 500,
        behavior: 'smooth',
      });
    }, 100);
  };

  return (
    <AppForm onSubmit={onSubmit} schema={earlyAccessFormSchema}>
      <div className='flex flex-col gap-6 py-4 md:px-16'>
        <Separator className='mt-6' />
        {step >= 1 && (
          <>
            <h2 className='flex items-center justify-center gap-1 text-2xl font-semibold'>
              1️⃣ {dictionary.earlyAccess.form.basicInformation.title}
              <Tooltip>
                <TooltipTrigger type='button'>
                  {' '}
                  <Icons.HelpCircle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{dictionary.earlyAccess.form.basicInformation.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </h2>
            <div className='grid grid-cols-2 gap-3'>
              <FormInputField<EarlyAccessFormValues>
                label={dictionary.earlyAccess.form.name.label}
                path='name'
                placeholder={dictionary.earlyAccess.form.name.placeholder}
              />
              <FormInputField<EarlyAccessFormValues>
                label={dictionary.earlyAccess.form.company.label}
                path='company'
                placeholder={dictionary.earlyAccess.form.company.placeholder}
              />
            </div>
            <div className='grid grid-cols-4 gap-3'>
              <FormSelect<EarlyAccessFormValues>
                label={dictionary.earlyAccess.form.country.label}
                options={[
                  { value: '+1', label: '🇺🇸 (+1)' },
                  { value: '+86', label: '🇨🇳 (+86)' },
                ]}
                path='country'
                placeholder={dictionary.earlyAccess.form.country.placeholder}
              />
              <div className='col-span-3 grid'>
                <FormInputField<EarlyAccessFormValues>
                  label={dictionary.earlyAccess.form.phone.label}
                  path='phone'
                  placeholder={dictionary.earlyAccess.form.phone.placeholder}
                  type='tel'
                />
              </div>
            </div>
            <FormInputField<EarlyAccessFormValues>
              label={dictionary.earlyAccess.form.email.label}
              path='email'
              placeholder={dictionary.earlyAccess.form.email.placeholder}
              type='email'
            />
            <p className='text-muted-foreground text-sm'>
              {dictionary.earlyAccess.form.basicInformation.tooltip}
            </p>
          </>
        )}
        {step >= 2 && (
          <>
            <h2 className='flex items-center justify-center gap-1 text-2xl font-semibold'>
              2️⃣ {dictionary.earlyAccess.form.financialInformation.title}
              <Tooltip>
                <TooltipTrigger type='button'>
                  {' '}
                  <Icons.HelpCircle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {dictionary.earlyAccess.form.financialInformation.tooltip}
                  </p>
                </TooltipContent>
              </Tooltip>
            </h2>

            <p className='text-muted-foreground text-sm'>
              {dictionary.earlyAccess.form.financialInformation.tooltip}
            </p>
            <FormInputField<EarlyAccessFormValues>
              label={dictionary.earlyAccess.form.averageMonthlyCashFlow.label}
              path='averageMonthlyCashFlow'
              placeholder={
                dictionary.earlyAccess.form.averageMonthlyCashFlow.placeholder
              }
              type='number'
            />
            <div className='flex flex-col gap-2'>
              <Label>
                {dictionary.earlyAccess.form.withdrawFeeRange.label}
              </Label>
              <RangeInput
                label={dictionary.earlyAccess.form.withdrawFeeRange.unit}
                max={2.5}
                min={0}
                setValues={setWithdrawFeeRange}
                step={0.01}
                values={withdrawFeeRange}
              />
              <p className='text-muted-foreground text-sm'>
                {dictionary.earlyAccess.form.withdrawFeeRange.tooltip}
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <Label>
                {dictionary.earlyAccess.form.withdrawSpeedRange.label}
              </Label>
              <RangeInput
                label={dictionary.earlyAccess.form.withdrawSpeedRange.unit}
                max={14}
                min={1}
                setValues={setWithdrawSpeedRange}
                step={1}
                values={withdrawSpeedRange}
              />
              <p className='text-muted-foreground text-sm'>
                {dictionary.earlyAccess.form.withdrawSpeedRange.tooltip}
              </p>
            </div>
            <div className='flex flex-col gap-1'>
              <Label>
                {dictionary.earlyAccess.form.customerServices.label}
              </Label>
              <MultipleSelectButtonGroup
                options={dictionary.earlyAccess.form.customerServices.options}
                setValues={setCustomerServices}
                values={customerServices}
              />
            </div>

            <FormSelect<EarlyAccessFormValues>
              label={dictionary.earlyAccess.form.theMostConcerned.label}
              options={dictionary.earlyAccess.form.theMostConcerned.options}
              path='theMostConcerned'
              placeholder={
                dictionary.earlyAccess.form.theMostConcerned.placeholder
              }
            />
            <Suspense
              fallback={<Icons.Spinner className='mx-auto animate-spin' />}
            >
              <Accordion collapsible type='single'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger
                    className='flex justify-start gap-1 text-xl'
                    type='button'
                  >
                    {dictionary.earlyAccess.form.provideMoreInformation.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-6 px-1'>
                      <FormInputField<EarlyAccessFormValues>
                        label={dictionary.earlyAccess.form.currentGateway.label}
                        path='currentGateway'
                        placeholder={
                          dictionary.earlyAccess.form.currentGateway.placeholder
                        }
                      />
                      <FormInputField<EarlyAccessFormValues>
                        label={dictionary.earlyAccess.form.currentRate.label}
                        path='currentRate'
                        placeholder={
                          dictionary.earlyAccess.form.currentRate.placeholder
                        }
                      />
                      <FormInputField<EarlyAccessFormValues>
                        label={dictionary.earlyAccess.form.businessType.label}
                        path='businessType'
                        placeholder={
                          dictionary.earlyAccess.form.businessType.placeholder
                        }
                      />

                      <Label>
                        {dictionary.earlyAccess.form.businessCoverage.label}
                      </Label>
                      <MultipleSelectButtonGroup
                        options={
                          dictionary.earlyAccess.form.businessCoverage.options
                        }
                        setValues={setBusinessCoverage}
                        values={businessCoverage}
                      />
                      <Label>
                        {dictionary.earlyAccess.form.currency.label}
                      </Label>
                      <MultipleSelectButtonGroup
                        options={dictionary.earlyAccess.form.currency.options}
                        setValues={setCurrency}
                        values={currency}
                      />
                      <p className='text-muted-foreground mt-6'>
                        {
                          dictionary.earlyAccess.form.provideMoreInformation
                            .tooltip
                        }{' '}
                        👇
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Suspense>
          </>
        )}

        <Separator className='mt-6' />
        <Label className='flex justify-center'>{step} / 2</Label>
        <Progress value={(step / 2) * 100} />
        {step < 2 ? (
          <Button
            className='p-8 text-xl font-semibold'
            key='next'
            onClick={handleNextStep}
            type='button'
          >
            {dictionary.earlyAccess.form.next}
          </Button>
        ) : (
          <Button
            className='p-8 text-xl font-semibold'
            key='submit'
            loading={isLoading}
            size='lg'
            type='submit'
          >
            {dictionary.earlyAccess.form.submit} <Icons.ChevronRight />
          </Button>
        )}
      </div>
    </AppForm>
  );
};

const RangeInput = ({
  values,
  setValues,
  min = 0,
  max = 100,
  step = 1,
  label = '',
}: {
  values: [number, number];
  setValues: (value: [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
}) => {
  return (
    <div className='grid grid-cols-3 gap-3'>
      <Label className='flex justify-end'>
        {values[0]}
        {label}
      </Label>

      <Slider
        className='w-full'
        defaultValue={values}
        max={max}
        min={min}
        onValueChange={setValues}
        step={step}
      />
      <Label>
        {values[1]}
        {label}
      </Label>
    </div>
  );
};

const MultipleSelectButtonGroup = ({
  values,
  setValues,
  options,
}: {
  values: string[];
  setValues: (value: string[]) => void;
  options: { value: string; label: string }[];
}) => {
  return (
    <div className='grid grid-cols-3 gap-3'>
      {options.map(option => (
        <Button
          key={option.value}
          onClick={() => {
            if (values.includes(option.value)) {
              setValues(values.filter(v => v !== option.value));
            } else {
              setValues([...values, option.value]);
            }
          }}
          type='button'
          variant={values.includes(option.value) ? 'default' : 'outline'}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};
