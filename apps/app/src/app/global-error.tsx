'use client';

import { Button } from 'ui';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang='zh'>
      <body>
        <h2>出了些问题 🤯</h2>
        <pre>{error.message}</pre>
        <Button
          onClick={() => {
            reset();
          }}
        >
          重试
        </Button>
      </body>
    </html>
  );
}
