'use client';

import { z } from 'zod';
import { Button, useToast } from 'ui';
import { useState } from 'react';
import { AppForm } from '../../../components/form/AppForm';
import { FormInputField } from '../../../components/form/FormInputField';
import type { Dictionary } from '../../../dictionaries';
import { FormSelect } from '../../../components/form/FormSelect';
import createSupabaseClientClient from '../../../../lib/supabase/client';

const questionnaireFormSchema = z.object({
  help: z.string().optional().nullable(),
  how: z.string(),
  experience: z.string().optional().nullable(),
  willing: z.boolean().optional().nullable(),
  amount: z.string().optional().nullable(),
  additional: z.string().optional().nullable(),
});

type QuestionnaireFormValues = z.infer<typeof questionnaireFormSchema>;

export const QuestionnaireForm = ({
  dictionary,
}: {
  dictionary: Dictionary;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [experienceValue, setExperienceValue] = useState(3);
  const [helpValue, setHelpValue] = useState(50);
  const [amountValue, setAmountValue] = useState(500);
  const { toast } = useToast();

  const onSubmit = async ({
    help,
    how,
    experience,
    willing,
    amount,
    additional,
  }: QuestionnaireFormValues) => {
    setIsLoading(true);
    const supabase = createSupabaseClientClient();
    const { error } = await supabase.from('questionnaire').insert([
      {
        how,
        help,
        experience,
        willing,
        amount,
        additional,
      },
    ]);

    if (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    toast({
      title: '成功提交',
      description: '感谢您填写问卷，OneFlow 会把最好的服务提供给您',
    });
    setIsLoading(false);
    setDone(true);
  };

  return (
    <AppForm onSubmit={onSubmit} schema={questionnaireFormSchema}>
      <div className='flex min-h-0 flex-1 flex-col gap-4'>
        <h2 className='text-xl font-semibold'>
          {dictionary.earlyAccess.questionnaire.title}
        </h2>
        <p className='text-muted-foreground'>
          {dictionary.earlyAccess.questionnaire.description}
        </p>
        <br/>
        <FormSelect<QuestionnaireFormValues>
          label={dictionary.earlyAccess.questionnaire.how.title}
          options={dictionary.earlyAccess.questionnaire.how.options}
          path='how'
          placeholder='请选择'
        />
        <br/>
        <FormInputField<QuestionnaireFormValues>
          className='shadow-none'
          defaultValue={helpValue}
          label={dictionary.earlyAccess.questionnaire.help}
          max={5}
          min={1}
          onChange={e => {
            setHelpValue(Number(e.target.value));
          }}
          path='help'
          type='range'
        />
        <p className='text-muted-foreground'>{helpValue}%</p>
        <br />
        <FormInputField<QuestionnaireFormValues>
          className='shadow-none'
          defaultValue={experienceValue}
          label={dictionary.earlyAccess.questionnaire.experience.title}
          max={5}
          min={1}
          onChange={e => {
            setExperienceValue(Number(e.target.value));
          }}
          path='experience'
          type='range'
        />

        <p className='text-muted-foreground'>
          {experienceValue} -
          {
            dictionary.earlyAccess.questionnaire.experience.mapping[
              experienceValue as 1 | 2 | 3 | 4 | 5
            ]
          }
        </p>
        
        <FormInputField<QuestionnaireFormValues>
          className='shadow-none'
          label={dictionary.earlyAccess.questionnaire.willing}
          path='experience'
          type='checkbox'
        />
        <br />
        <FormInputField<QuestionnaireFormValues>
          className='shadow-none'
          label={dictionary.earlyAccess.questionnaire.amount.title}
          max={1000}
          min={1}
          onChange={e => {
            setAmountValue(Number(e.target.value));
          }}
          path='amount'
          type='range'

        />
        <p className='text-muted-foreground'>{amountValue} {dictionary.earlyAccess.questionnaire.amount.unit}</p>
        <br/>
        <FormInputField<QuestionnaireFormValues>
          label={dictionary.earlyAccess.questionnaire.additional}
          path='additional'
        />
        <br/>
        <Button disabled={done || isLoading} loading={isLoading} type='submit'>
          {done ? dictionary.earlyAccess.questionnaire.done : dictionary.earlyAccess.questionnaire.submit}
        </Button>
      </div>
    </AppForm>
  );
};
