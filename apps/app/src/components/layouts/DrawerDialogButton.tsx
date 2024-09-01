'use client';
import * as React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from 'ui';
import { useState, useEffect } from 'react';

// Define the type for the hook's return value
const useMediaQuery = (query: string): boolean => {
  // Initialize state based on whether the query matches
  const [matches, setMatches] = useState<boolean>(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    // Create a MediaQueryList object
    const mediaQueryList = window.matchMedia(query);

    // Define a callback to update the state when the media query changes
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Attach the callback to the media query list
    mediaQueryList.addEventListener('change', handleChange);

    // Cleanup the event listener when the component unmounts or the query changes
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

interface DrawerDialogButtonProps {
  title: string;
  description: string;
  buttonText: string;
  children?: React.ReactNode;
}

export function DrawerDialogButton({
  children,
  title,
  description,
  buttonText,
}: DrawerDialogButtonProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogTrigger asChild>
          <Button>{buttonText}</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <DrawerTrigger asChild>
        <Button>{buttonText}</Button>
      </DrawerTrigger>
      <DrawerContent className='px-4'>
        <DrawerHeader className='text-left'>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        {children}
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>OK!</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
