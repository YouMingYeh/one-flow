'use client';

import { Button, Icons, RichTextEditor } from 'ui';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import AIContentGenerator from './AIContentGenerator';

export default function Note() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  return (
    <div className='z-100'>
      <AnimatePresence>
        <Button
          className='z-100 fixed bottom-4 right-4'
          onClick={() => {
            setOpen(!open);
          }}
          variant='outline'
        >
          Quick Note
        </Button>
        {open ? (
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            className='bg-background z-60 fixed bottom-0 right-0 h-[90%] w-96 p-4 py-8 shadow-xl'
            exit={{ x: -300, opacity: 0 }}
            initial={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              className='absolute right-4 top-4'
              onClick={() => {
                setOpen(false);
              }}
              size='icon'
              variant='ghost'
            >
              <Icons.close />
            </Button>
            <h2 className='text-2xl font-bold'>Note</h2>
            <h3 className='text-md text-muted-foreground'>
              You can write some quick notes here. This will not be saved to the
              database, but you can save it using the Edit Button on the top
              right.
            </h3>
            {/* <Label className='mb-1'>Content</Label> */}
            <RichTextEditor
              className='h-96'
              onChange={value => {
                setContent(value);
              }}
              value={content}
            />
            <p className='text-muted-foreground flex flex-wrap p-1 text-xs'>
              You can try our AI content generator with built in Web Scraping
              and Youtube Video Transcription Tools to get started quickly!
            </p>
            <AIContentGenerator />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
