'use client';
import { useState } from 'react';
import {
  Button,
  Icons,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Label,
  Input,
  Textarea,
  RichTextEditor,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  DialogClose,
  useToast,
} from 'ui';

export default function ScriptGenerator({
  defaultContent,
  defaultScript,
}: {
  defaultContent: string;
  defaultScript: string;
}) {
  const [numberOfLines, setNumberOfLines] = useState(50);
  const [numberOfTalkers, setNumberOfTalkers] = useState(2);
  const [titleOfShow, setTitleOfShow] = useState('ABC Show');
  const [prompt, setPrompt] = useState('A script for a podcast episode');
  const [content, setContent] = useState(defaultContent);
  const [currentScript, setCurrentScript] = useState(defaultScript);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const handleGenerate = () => {
    // Implement AI Content Generation
    setLoading(true);
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    setResult('test result');

    // setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='gap-1' type='button'>
          <Icons.Sparkles />
          Generate Script
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Script Generator</DialogTitle>
          <DialogDescription>
            The AI Script Generator will help you generate a script according to
            the number of lines, talkers, title of the show, prompt, content,
            and current script you provided. Click the button below to generate
            the script right away!
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col items-center justify-center gap-2'>
          <Accordion className='w-full' collapsible type='single'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Settings</AccordionTrigger>
              <AccordionContent>
                <div className='flex w-full flex-row justify-between gap-1'>
                  <div className='w-full'>
                    <Label className='mb-1'>Number of Lines</Label>
                    <Input
                      className=''
                      onChange={e => {
                        setNumberOfLines(Number(e.target.value));
                      }}
                      type='number'
                      value={numberOfLines}
                    />
                  </div>
                  <div className='w-full'>
                    <Label className='mb-1'>Number of Talkers</Label>
                    <Input
                      className=''
                      onChange={e => {
                        setNumberOfTalkers(Number(e.target.value));
                      }}
                      type='number'
                      value={numberOfTalkers}
                    />
                  </div>
                </div>
                <div className='w-full'>
                  <Label className='mb-1'>Title of Show</Label>
                  <Input
                    className='w-full'
                    onChange={e => {
                      setTitleOfShow(e.target.value);
                    }}
                    value={titleOfShow}
                  />
                </div>
                <div className='w-full'>
                  <Label className='mb-1'>Prompt</Label>
                  <Textarea
                    className='w-full'
                    onChange={e => {
                      setPrompt(e.target.value);
                    }}
                    value={prompt}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-2'>
              <AccordionTrigger>Reference</AccordionTrigger>
              <AccordionContent>
                <div className='w-full'>
                  <Label className='mb-1'>Content</Label>
                  <RichTextEditor
                    className='w-full'
                    onChange={e => {
                      setContent(e);
                    }}
                    value={content}
                  />
                </div>
                <div className='w-full'>
                  <Label className='mb-1'>Current Script</Label>
                  <Textarea
                    className='w-full'
                    onChange={e => {
                      setCurrentScript(e.target.value);
                    }}
                    value={currentScript}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button onClick={handleGenerate}>
            {loading ? 'Generating...' : 'Generate Script!'}
          </Button>

          {/* result */}
          {result ? (
            <>
              <h2 className='text-lg font-bold'>Generated Script:</h2>
              <div className='relative w-full rounded-lg border p-4'>
                {result}
              </div>
              <DialogClose>
                <Button
                  className=''
                  onClick={() => {
                    toast({
                      title: 'Script Saved',
                      description:
                        'The script has been saved successfully! Reloading the page to see the changes...',
                    });
                    setTimeout(() => {
                      window.location.reload();
                    }, 2000);
                  }}
                >
                  Save Script
                </Button>
              </DialogClose>
            </>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
