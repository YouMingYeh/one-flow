import { z } from 'zod';
import type { Node } from '@xyflow/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from 'ui';
import { AppForm } from '../../../components/form/AppForm';
import { FormInputField } from '../../../components/form/FormInputField';

interface NodeAutoFormProps {
  nodeConfig: Node;
  setNodeConfig: (nodeConfig: Node) => void;
}

const NodeAutoForm = ({ nodeConfig, setNodeConfig }: NodeAutoFormProps) => {
  const handleUpdate = (values: Node) => {
    setNodeConfig(values);
  };
  const handleSubmit = (values: NodeFormValues) => {
    handleUpdate({
      ...nodeConfig,
      id: values.id,
      type: values.type,
      position: {
        x: values.position.x,
        y: values.position.y,
      },
      data: {
        label: values.data.label,
      },
      style: {
        width: values.measured.width,
        height: values.measured.height,
      },
      draggable: values.draggable,
      selectable: values.selectable,
      connectable: values.connectable,
      zIndex: values.zIndex,
    });
  };

  return (
    <AppForm
      defaultValues={{
        ...nodeConfig,
        type: nodeConfig.type as
          | 'default'
          | 'input'
          | 'output'
          | 'group'
          | 'annotation',
      }}
      onSubmit={handleSubmit}
      schema={nodeFormSchema}
    >
      <Accordion className='w-full' collapsible type='single'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Functionality</AccordionTrigger>
          <AccordionContent className='flex flex-col gap-2 p-1' />
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Appearance</AccordionTrigger>
          <AccordionContent className='flex flex-col gap-2 p-1'>
            <FormInputField<NodeFormValues>
              label='ID'
              path='id'
              placeholder='Node ID'
              type='text'
            />
            <FormInputField<NodeFormValues>
              label='Label'
              onChange={e => {
                handleUpdate({
                  ...nodeConfig,
                  data: {
                    label: e.target.value,
                  },
                });
              }}
              path='data.label'
              placeholder='Node Label'
              type='text'
            />
            <FormInputField<NodeFormValues>
              label='Type'
              onChange={e => {
                handleUpdate({
                  ...nodeConfig,
                  type: e.target.value as
                    | 'default'
                    | 'input'
                    | 'output'
                    | 'group'
                    | 'annotation',
                });
              }}
              path='type'
              placeholder='Node Type'
              type='text'
            />
            <FormInputField<NodeFormValues>
              label='X'
              onChange={e => {
                handleUpdate({
                  ...nodeConfig,
                  position: {
                    ...nodeConfig.position,
                    x: parseInt(e.target.value),
                  },
                });
              }}
              path='position.x'
              placeholder='Node X'
              type='number'
            />
            <FormInputField<NodeFormValues>
              label='Y'
              onChange={e => {
                handleUpdate({
                  ...nodeConfig,
                  position: {
                    ...nodeConfig.position,
                    y: parseInt(e.target.value),
                  },
                });
              }}
              path='position.y'
              placeholder='Node Y'
              type='number'
            />
            <FormInputField<NodeFormValues>
              label='Z'
              onChange={e => {
                handleUpdate({
                  ...nodeConfig,
                  zIndex: parseInt(e.target.value),
                });
              }}
              path='zIndex'
              placeholder='Node Z-Index'
              type='number'
            />
            <FormInputField<NodeFormValues>
              label='Width'
              onChange={e => {
                handleUpdate({
                  ...nodeConfig,
                  style: {
                    ...nodeConfig.style,
                    width: parseInt(e.target.value),
                  },
                });
              }}
              path='measured.width'
              placeholder='Node Width'
              type='number'
            />
            <FormInputField<NodeFormValues>
              label='Height'
              onChange={e => {
                handleUpdate({
                  ...nodeConfig,
                  style: {
                    ...nodeConfig.style,
                    height: parseInt(e.target.value),
                  },
                });
              }}
              path='measured.height'
              placeholder='Node Height'
              type='number'
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Interact (BETA)</AccordionTrigger>
          <AccordionContent className='flex flex-col gap-2 p-1'>
            <FormInputField<NodeFormValues>
              label='Draggable'
              onChange={e => {
                handleUpdate({
                  ...nodeConfig,
                  draggable: e.target.checked,
                });
              }}
              path='draggable'
              type='checkbox'
            />
            <FormInputField<NodeFormValues>
              label='Selectable'
              onChange={e => {
                handleUpdate({
                  ...nodeConfig,
                  selectable: e.target.checked,
                });
              }}
              path='selectable'
              type='checkbox'
            />
            <FormInputField<NodeFormValues>
              label='Connectable'
              onChange={e => {
                handleUpdate({
                  ...nodeConfig,
                  connectable: e.target.checked,
                });
              }}
              path='connectable'
              type='checkbox'
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className='mt-2 w-full' type='submit'>
        Check
      </Button>
    </AppForm>
  );
};

export default NodeAutoForm;

const nodeFormSchema = z.object({
  id: z.string(),
  position: z.object({
    x: z.number(),
    y: z.number(),
  }),
  type: z.enum(['default', 'input', 'output', 'group', 'annotation']),
  data: z.object({
    label: z.string(),
  }),
  measured: z.object({
    width: z.number(),
    height: z.number(),
  }),
  draggable: z.boolean().optional(),
  selectable: z.boolean().optional(),
  connectable: z.boolean().optional(),
  zIndex: z.number().optional(),
});

type NodeFormValues = z.infer<typeof nodeFormSchema>;

// draggable?: boolean;
// selectable?: boolean;
// connectable?: boolean;
