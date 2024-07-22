'use client';
import { CopyButton } from 'ui';

export default function CopyURLButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CopyButton
      text={typeof window === 'undefined' ? '' : window.location.href}
    >
      {children}
    </CopyButton>
  );
}
