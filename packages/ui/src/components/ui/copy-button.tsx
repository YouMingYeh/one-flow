'use client';
import { useState } from 'react';
import { Button, type ButtonProps } from './button';
import { Icons } from './icons';
import { useToast } from './use-toast';

export interface CopyButtonProps extends ButtonProps {
  text: string;
}

export const CopyButton = ({ text, ...props }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);
  const { toast } = useToast();

  const handleClick = () => {
    void navigator.clipboard.writeText(text);
    setCopied(true);
    clearTimeout(timeoutId);
    toast({
      title: `${text} - Copied! `,
    });
    setTimeoutId(
      window.setTimeout(() => {
        setCopied(false);
      }, 2000),
    );
  };

  return (
    <Button onClick={handleClick} {...props}>
      {copied ? (
        <div className='flex items-center justify-center gap-2'>
          <Icons.Check /> Copied!
        </div>
      ) : (
        props.children
      )}
    </Button>
  );
};
