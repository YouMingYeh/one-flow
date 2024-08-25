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
  help: z.boolean(),
  how: z.string(),
  experience: z.string().optional().nullable(),
  pay: z.boolean(),
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
  const [experienceValue, setExperienceValue] = useState(3);
  const { toast } = useToast();

  const onSubmit = async ({
    help,
    how,
    experience,
    pay,
    amount,
    additional,
  }: QuestionnaireFormValues) => {
    setIsLoading(true);
    const supabase = createSupabaseClientClient();
    const { error } = await supabase.from('questionnaire').insert([
      {
        help,
        how,
        experience,
        pay,
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
  };

  return (
    <AppForm onSubmit={onSubmit} schema={questionnaireFormSchema}>
      <div className='flex min-h-0 flex-1 flex-col gap-4'>
        <h2 className='text-2xl font-semibold'>
          {dictionary.earlyAccess.questionnaire.title}
        </h2>
        <p className='text-muted-foreground'>
          {dictionary.earlyAccess.questionnaire.description}
        </p>

        <FormSelect<QuestionnaireFormValues>
          label={dictionary.earlyAccess.questionnaire.how.title}
          options={dictionary.earlyAccess.questionnaire.how.options}
          path='how'
        />
        <FormInputField<QuestionnaireFormValues>
          label={dictionary.earlyAccess.questionnaire.help}
          path='help'
          type='checkbox'
        />
        <FormInputField<QuestionnaireFormValues>
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
          label={dictionary.earlyAccess.questionnaire.pay}
          path='pay'
          type='checkbox'
        />
        <FormSelect<QuestionnaireFormValues>
          label={dictionary.earlyAccess.questionnaire.amount.title}
          options={dictionary.earlyAccess.questionnaire.amount.options}
          path='amount'
        />
        <FormInputField<QuestionnaireFormValues>
          label={dictionary.earlyAccess.questionnaire.additional}
          path='additional'
        />
        <Button loading={isLoading} type='submit'>
          {dictionary.earlyAccess.questionnaire.submit}
        </Button>
      </div>
    </AppForm>
  );
};