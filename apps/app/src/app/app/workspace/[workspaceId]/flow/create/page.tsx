'use client';

import {
  Button,
  Icons,
  Input,
  Label,
  Separator,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useToast,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Alert,
  AlertTitle,
  AlertDescription,
} from 'ui';
import { useParams, useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import createSupabaseClientClient from '../../../../../../../lib/supabase/client';
import { edges, nodes } from '../../../../../../modules/flow/components/initial-elements';

type Type = {
  label: string;
  value: string;
};

const types = [
  { label: 'Payment Processing', value: 'payment-processing' },
  { label: 'Cash Flow Management', value: 'cash-flow-management' },
  { label: 'Transaction Processing', value: 'transaction-processing' },
  { label: 'Financial Reporting', value: 'financial-reporting' },
  { label: 'Budgeting', value: 'budgeting' },
  { label: 'Tax Management', value: 'tax-management' },
  { label: 'Bank Reconciliation', value: 'bank-reconciliation' },
  { label: 'Expense Tracking', value: 'expense-tracking' },
  { label: 'Invoice Management', value: 'invoice-management' },
  { label: 'Financial Analysis', value: 'financial-analysis' },
  { label: 'Risk Management', value: 'risk-management' },
  { label: 'Regulatory Compliance', value: 'regulatory-compliance' },
  { label: 'Investment Management', value: 'investment-management' },
  { label: 'Estate Planning', value: 'estate-planning' },
  { label: 'Personal Finance', value: 'personal-finance' },
  { label: 'Other', value: 'other' },
];

type Template = {
  value: string;
  title: string;
  description: string;
};

const templates: Record<string, Template[]> = {
  'payment-processing': [
    {
      value: 'default',
      title: 'Default',
      description: 'Default template for payment processing flows.',
    },
    {
      value: 'recurring-payments',
      title: 'Recurring Payments',
      description: 'Template for recurring payments.',
    },
  ],
  'cash-flow-management': [
    {
      value: 'default',
      title: 'Default',
      description: 'Default template for cash flow management flows.',
    },
    {
      value: 'cash-flow-projection',
      title: 'Cash Flow Projection',
      description: 'Template for cash flow projection.',
    },
  ],
  'transaction-processing': [
    {
      value: 'default',
      title: 'Default',
      description: 'Default template for transaction processing flows.',
    },
    {
      value: 'transaction-categorization',
      title: 'Transaction Categorization',
      description: 'Template for transaction categorization.',
    },
  ],
  'financial-reporting': [
    {
      value: 'default',
      title: 'Default',
      description: 'Default template for financial reporting flows.',
    },
    {
      value: 'monthly-financial-report',
      title: 'Monthly Financial Report',
      description: 'Template for monthly financial report.',
    },
  ],
  // ...
};

const RecentPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<Type | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [invalidMessage, setInvalidMessage] = useState<string | null>(null);

  const submit = async () => {
    setLoading(true);
    const supabase = createSupabaseClientClient();
    const { data } = await supabase.auth.getSession();
    const user = data.session?.user;
    if (!user) {
      router.push('/auth/login');
      return;
    }
    if (!name || name.trim() === '') {
      setInvalidMessage('Name is required.');
      setLoading(false);
      return;
    }
    if (!description || description.trim() === '') {
      setInvalidMessage('Description is required.');
      setLoading(false);
      return;
    }
    if (!selectedType) {
      setInvalidMessage('Type is required.');
      setLoading(false);
      return;
    }
    if (!selectedTemplate) {
      setInvalidMessage('Template is required.');
      setLoading(false);
      return;
    }

    const flow = {
      id: uuidv4(),
      workspace_id: params.workspaceId,
      name,
      description,
      type: selectedType.value,
      template: selectedTemplate,
      // TODO: Fix this, it should be the actual flow content imported by the user
      content: JSON.stringify({nodes, edges})
    } as Flow;

    await supabase.from('flow').insert([flow]);
    toast({
      title: 'Flow created successfully!',
    });
    router.push(
      `/app/workspace/${params.workspaceId as string}/flow/${flow.id}`,
    );
  };

  const getTemplateOptions = () => {
    if (!selectedType) {
      return [
        {
          value: 'default',
          title: 'Default',
          description: 'Default template for flows.',
        },
      ] as Template[];
    }
    if (selectedType.value in templates) {
      return templates[selectedType.value];
    }
    return [
      {
        value: 'default',
        title: 'Default',
        description: 'Default template for flows.',
      },
    ] as Template[];
  };

  const templateOptions = getTemplateOptions();

  return (
    <div className='space-y-6 px-10'>
      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>Create a new flow</h2>
        <p className='text-muted-foreground'>You can create a new flow here.</p>
      </div>
      <Separator className='my-6' />
      <div className='flex h-[80vh] flex-col space-y-8 overflow-y-scroll pb-8 md:flex-row md:space-x-12 md:space-y-0'>
        <div className='flex w-full flex-col gap-4 p-1 lg:max-w-xl'>
          <div>
            <Label className='mb-1 flex items-center gap-1 align-middle'>
              Name{' '}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Icons.HelpCircle
                    className='hover:cursor-pointer'
                    size={16}
                  />
                </TooltipTrigger>
                <TooltipContent className='flex max-w-md flex-wrap'>
                  The name of the flow. This will be displayed on the flow card.
                </TooltipContent>
              </Tooltip>
            </Label>
            <Input
              onChange={e => {
                setName(e.target.value);
              }}
              placeholder='Collect Payments from Amazon'
              required
              value={name}
            />
          </div>
          <div>
            <Label className='mb-1 flex items-center gap-1 align-middle'>
              Description{' '}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Icons.HelpCircle
                    className='hover:cursor-pointer'
                    size={16}
                  />
                </TooltipTrigger>
                <TooltipContent className='flex max-w-md flex-wrap'>
                  A brief description of the flow. This will be displayed on the
                  flow card.
                </TooltipContent>
              </Tooltip>
            </Label>
            <Textarea
              onChange={e => {
                setDescription(e.target.value);
              }}
              placeholder='This flow processes payments collection from Amazon. It will find the best solution as well'
              required
              value={description}
            />
          </div>
          <div>
            <Label className='mb-1 flex items-center gap-1 align-middle'>
              Type{' '}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Icons.HelpCircle
                    className='hover:cursor-pointer'
                    size={16}
                  />
                </TooltipTrigger>
                <TooltipContent className='flex max-w-md flex-wrap'>
                  The type of the flow. This will be displayed on the flow card.
                </TooltipContent>
              </Tooltip>
            </Label>

            <Popover onOpenChange={setOpen} open={open}>
              <PopoverTrigger asChild>
                <Button className='w-[300px] justify-start' variant='outline'>
                  {selectedType ? <>{selectedType.label}</> : <>+ Set type</>}
                </Button>
              </PopoverTrigger>
              <PopoverContent align='start' className='p-0' side='right'>
                <Command>
                  <CommandInput placeholder='Change type...' />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                      {types.map(type => (
                        <CommandItem
                          key={type.value}
                          onSelect={value => {
                            setSelectedType(
                              types.find(
                                priority => priority.value === value,
                              ) || null,
                            );
                            setOpen(false);
                          }}
                          value={type.value}
                        >
                          {type.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label className='mb-1 flex items-center gap-1 align-middle'>
              Template{' '}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Icons.HelpCircle
                    className='hover:cursor-pointer'
                    size={16}
                  />
                </TooltipTrigger>
                <TooltipContent className='flex max-w-md flex-wrap'>
                  The template of the flow. This will be displayed on the flow
                  card.
                </TooltipContent>
              </Tooltip>
            </Label>

            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
              {templateOptions.map(template => (
                <Card
                  className={`${
                    selectedTemplate === template.value
                      ? 'bg-primary-foreground text-primary-background border-primary shadow-xl'
                      : 'bg-card text-card-foreground'
                  } relative rounded-xl shadow transition-all hover:cursor-pointer`}
                  key={template.value}
                  onClick={() => {
                    setSelectedTemplate(template.value);
                  }}
                >
                  <CardHeader>
                    <CardTitle>{template.title}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>{/* <p>...</p> */}</CardContent>
                  <CardFooter>
                    <Button className='absolute bottom-4 right-4' size='sm'>
                      Check it out <Icons.ChevronRight />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          {invalidMessage ? (
            <Alert variant='destructive'>
              <Icons.AlertCircle />
              <AlertTitle>Invalid form</AlertTitle>
              <AlertDescription>{invalidMessage}</AlertDescription>
            </Alert>
          ) : null}

          <Button loading={loading} onClick={submit}>
            Create Flow <Icons.ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecentPage;
