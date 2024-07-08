'use client';
import { Icons, buttonVariants, cn, useToast } from 'ui';
import { signInWithGoogle } from '../../../app/auth/actions';

export const LoginWithGoogleButton = () => {
  const { toast } = useToast();
  const onClick = async () => {
    const error = await signInWithGoogle();
    if (error) {
      toast({ title: error.message, variant: 'destructive' });
    }
  };
  return (
    <button
      className={cn(buttonVariants({ variant: 'outline' }))}
      onClick={onClick}
      type='button'
    >
      <Icons.Google className='mr-2 h-4 w-4' />
      Google
    </button>
  );
};
