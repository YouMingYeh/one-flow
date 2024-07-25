'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, type FC } from 'react';
import { z } from 'zod';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Icons,
  Label,
  Separator,
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
  const [businessCoverage, setBusinessCoverage] = useState<string[]>([]);
  const [currency, setCurrency] = useState<string[]>([]);
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
    monthlyRevenue: z.number().optional().nullable(),
    minProcessingVolume: z.number().optional().nullable(),
    maxProcessingVolume: z.number().optional().nullable(),
  });

  type EarlyAccessFormValues = z.infer<typeof earlyAccessFormSchema>;

  const onSubmit = async (data: EarlyAccessFormValues) => {
    setIsLoading(true);
    const supabase = createSupabaseClientClient();

    const earlyAccessId = uuidv4();
    await supabase.from('early_access').insert([
      {
        id: earlyAccessId,
        name: data.name,
        email: data.email,
        country: data.country,
        company: data.company,
        phone: data.phone,
        business_type: data.businessType,
        monthly_revenue: data.monthlyRevenue,
        min_processing_volume: data.minProcessingVolume,
        max_processing_volume: data.maxProcessingVolume,
        business_coverage: businessCoverage.join(','),
        currency: currency.join(','),
      },
    ]);
    toast({
      title: dictionary.earlyAccess.form.submit_success,
    });
    setTimeout(() => {
      router.push(`/early-access/${earlyAccessId}`);
    }, 1000);

    setIsLoading(false);
  };

  return (
    <AppForm
      defaultValues={{
        name: '',
        email: '',
        country: '+86',
        company: '',
        phone: '',
      }}
      onSubmit={onSubmit}
      schema={earlyAccessFormSchema}
    >
      <div className='flex flex-col gap-6 py-4 md:px-16'>
        <Separator className='mt-6' />
        <h2 className='flex items-center justify-center gap-1 text-2xl font-semibold'>
          {dictionary.earlyAccess.form.basicInformation.title}
          <Tooltip>
            <TooltipTrigger>
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
        <Separator className='mt-6' />
        <h2 className='flex items-center justify-center gap-1 text-2xl font-semibold'>
          {dictionary.earlyAccess.form.financialInformation.title}
          <Tooltip>
            <TooltipTrigger>
              {' '}
              <Icons.HelpCircle />
            </TooltipTrigger>
            <TooltipContent>
              <p>{dictionary.earlyAccess.form.financialInformation.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </h2>
        <FormSelect<EarlyAccessFormValues>
          label={dictionary.earlyAccess.form.businessType.label}
          options={dictionary.earlyAccess.form.businessType.options}
          path='businessType'
          placeholder={dictionary.earlyAccess.form.businessType.placeholder}
        />
        <FormInputField<EarlyAccessFormValues>
          label={dictionary.earlyAccess.form.monthlyRevenue.label}
          path='monthlyRevenue'
          placeholder={dictionary.earlyAccess.form.monthlyRevenue.placeholder}
          type='number'
        />
        <div className='grid grid-cols-2 gap-3'>
          <FormInputField<EarlyAccessFormValues>
            label={dictionary.earlyAccess.form.minProcessingVolume.label}
            path='minProcessingVolume'
            placeholder={
              dictionary.earlyAccess.form.minProcessingVolume.placeholder
            }
            type='number'
          />
          <FormInputField<EarlyAccessFormValues>
            label={dictionary.earlyAccess.form.maxProcessingVolume.label}
            path='maxProcessingVolume'
            placeholder={
              dictionary.earlyAccess.form.maxProcessingVolume.placeholder
            }
            type='number'
          />
        </div>
        <Label>{dictionary.earlyAccess.form.businessCoverage.label}</Label>
        <MultipleSelectButtonGroup
          options={dictionary.earlyAccess.form.businessCoverage.options}
          setValues={setBusinessCoverage}
          values={businessCoverage}
        />
        <Label>{dictionary.earlyAccess.form.currency.label}</Label>
        <MultipleSelectButtonGroup
          options={dictionary.earlyAccess.form.currency.options}
          setValues={setCurrency}
          values={currency}
        />
        <p className='text-muted-foreground text-sm'>
          {dictionary.earlyAccess.form.financialInformation.tooltip}
        </p>
        <Accordion collapsible type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>{dictionary.earlyAccess.form.provideMoreInformation.title}</AccordionTrigger>
            <AccordionContent>
            {dictionary.earlyAccess.form.provideMoreInformation.tooltip}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator className='mt-6' />
        <Button
          className='p-8 text-xl font-semibold'
          loading={isLoading}
          size='lg'
          type='submit'
        >
          {dictionary.earlyAccess.form.submit} <Icons.ChevronRight />
        </Button>
      </div>
    </AppForm>
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
