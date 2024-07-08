'use client';

import { Button, Icons } from 'ui';
// @ts-expect-error: Unreachable code error
import { useFormStatus } from 'react-dom';

export default function SubmitButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  // eslint-disable-next-line -- Temporarily avoids the lint error problem.
  const { pending } = useFormStatus();
  return (
    <Button type='submit' {...props} disabled={pending as boolean}>
      {pending ? <Icons.Spinner className='animate-spin' /> : children}
    </Button>
  );
}
