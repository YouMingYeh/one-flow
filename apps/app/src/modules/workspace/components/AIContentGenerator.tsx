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
} from 'ui';

const handleWeb = async (url: string) => {
  const baseUrl = '/api/web';

  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });

  const data = (await response.json()) as { data: string };

  return data.data;
};

const handleYoutube = async (url: string) => {
  const baseUrl = '/api/youtube';
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });

  const data = (await response.json()) as { data: string };

  return data.data;
};
const handleText = async (text: string) => {
  const baseUrl = '/api/text';
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: text }),
  });

  const data = (await response.json()) as { data: string };

  return data.data;
};

export default function AIContentGenerator() {
  const [mode, setMode] = useState<'web' | 'youtube' | 'text'>('text');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('' as string);

  const handleGenerate = async () => {
    // Implement AI Content Generation
    setLoading(true);
    if (mode === 'web') {
      const data = await handleWeb(input);
      setContent(data);
      setLoading(false);
    } else if (mode === 'youtube') {
      const data = await handleYoutube(input);
      setContent(data);
    } else {
      const data = await handleText(input);
      setContent(data);
    }
    setLoading(false);
  };

  const placeholder = (() => {
    if (mode === 'web') {
      return 'Enter a URL';
    } else if (mode === 'youtube') {
      return 'Enter a Youtube URL';
    }
    return 'Enter a Text';
  })();

  const buttonContent = loading ? (
    <Icons.Spinner className='animate-spin' />
  ) : (
    <>
      {(() => {
        if (mode === 'web') {
          return 'Generate from Web';
        } else if (mode === 'youtube') {
          return 'Generate from Youtube';
        }
        return 'Generate Text';
      })()}
      <Icons.Wand />
    </>
  );

  return (
    <Dialog>
      <DialogTrigger>
        <Button type='button'>
          Try AI Content Generator <Icons.Wand />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>AI Content Generator</DialogTitle>
          <DialogDescription>
            The AI Content Generator uses Web Scraping and Youtube Video
            Transcription Tools to get you started quickly!
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='w-full'>
            <Label className='mb-1'>What do you want to generate?</Label>
            <Input
              className='w-full'
              onChange={e => {
                setInput(e.target.value);
              }}
              placeholder={placeholder}
              value={input}
            />
          </div>
          <Button disabled={loading} onClick={handleGenerate}>
            {/* Generate Content <Icons.Wand /> */}
            {buttonContent}
          </Button>

          {/* result */}
          {content ? (
            <>
              <h2 className='text-lg font-bold'>Generated Content:</h2>
              <div className='relative max-h-64 w-full overflow-y-scroll rounded-lg border p-4'>
                {content}
                {/* copy button */}
                <Button
                  className='bg-background absolute right-1 top-1 z-10'
                  onClick={() => navigator.clipboard.writeText(content)}
                  variant='outline'
                >
                  Copy
                </Button>
              </div>
            </>
          ) : null}

          <div className='relative w-full'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-background text-muted-foreground px-2'>
                Or try scrapers
              </span>
            </div>
          </div>
          <div className='flex gap-1'>
            {mode !== 'text' && (
              <Button
                onClick={() => {
                  setMode('text');
                }}
                variant='outline'
              >
                Text
              </Button>
            )}
            {mode !== 'web' && (
              <Button
                onClick={() => {
                  setMode('web');
                }}
                variant='outline'
              >
                Web
              </Button>
            )}
            {mode !== 'youtube' && (
              <Button
                onClick={() => {
                  setMode('youtube');
                }}
                variant='outline'
              >
                Youtube
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
